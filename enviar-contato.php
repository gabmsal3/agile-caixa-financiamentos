
<?php
// Inclui o PHPMailer se a opção for selecionada
$configFile = 'email-config.json';
$config = [];

// Carrega as configurações se o arquivo existir
if (file_exists($configFile)) {
    $configContent = file_get_contents($configFile);
    $config = json_decode($configContent, true);
}

// Configurações padrão se não houver arquivo de configuração
$para = isset($config['recipientEmail']) ? $config['recipientEmail'] : "contato@agilefinanciamentos.com.br";
$sendMethod = isset($config['sendMethod']) ? $config['sendMethod'] : "mail";
$assunto = "Novo contato do site - Agile Financiamentos";

// Captura os dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
    $servico = filter_input(INPUT_POST, 'servico', FILTER_SANITIZE_STRING);
    $mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);
    
    // Constrói o corpo do email
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "Serviço: $servico\n";
    $corpo .= "Mensagem:\n$mensagem\n";
    
    $enviado = false;
    
    if ($sendMethod === 'phpmailer') {
        // Usar PHPMailer
        require_once 'vendor/autoload.php';
        
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\SMTP;
        use PHPMailer\PHPMailer\Exception;
        
        $mail = new PHPMailer(true);
        
        try {
            // Configurações do servidor SMTP
            $mail->isSMTP();
            $mail->Host = $config['smtp']['host'] ?? 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = $config['smtp']['username'] ?? '';
            $mail->Password = $config['smtp']['password'] ?? '';
            $mail->SMTPSecure = ($config['smtp']['secure'] ?? true) ? PHPMailer::ENCRYPTION_STARTTLS : false;
            $mail->Port = $config['smtp']['port'] ?? 587;
            
            // Configurações do email
            $mail->setFrom($email, $nome);
            $mail->addAddress($para);
            $mail->addReplyTo($email, $nome);
            
            $mail->isHTML(false);
            $mail->Subject = $assunto;
            $mail->Body = $corpo;
            
            $enviado = $mail->send();
        } catch (Exception $e) {
            error_log("Erro PHPMailer: {$mail->ErrorInfo}");
            $enviado = false;
        }
    } else {
        // Usar função mail() nativa
        $cabecalhos = "From: $email\r\n";
        $cabecalhos .= "Reply-To: $email\r\n";
        $cabecalhos .= "X-Mailer: PHP/" . phpversion();
        
        $enviado = mail($para, $assunto, $corpo, $cabecalhos);
    }
    
    // Retorna resultado como JSON para ser processado pelo frontend
    header('Content-Type: application/json');
    
    if ($enviado) {
        echo json_encode(['success' => true, 'message' => 'Mensagem enviada com sucesso!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.']);
    }
    exit;
}

// Se o método não for POST, redireciona para a página inicial
header("Location: /");
exit;
?>
