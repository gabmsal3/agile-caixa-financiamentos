
<?php
// Configurações para o envio de e-mail
$para = "contato@agilefinanciamentos.com.br"; // Substitua pelo seu e-mail real
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
    
    // Cabeçalhos do email
    $cabecalhos = "From: $email\r\n";
    $cabecalhos .= "Reply-To: $email\r\n";
    $cabecalhos .= "X-Mailer: PHP/" . phpversion();
    
    // Envia o email
    $enviado = mail($para, $assunto, $corpo, $cabecalhos);
    
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
