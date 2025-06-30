
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if ($input) {
        $configFile = 'email-config.json';
        
        // Salva as configurações no arquivo JSON
        $result = file_put_contents($configFile, json_encode($input, JSON_PRETTY_PRINT));
        
        if ($result !== false) {
            echo json_encode(['success' => true, 'message' => 'Configurações salvas com sucesso!']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Erro ao salvar as configurações.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Dados inválidos.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método não permitido.']);
}
?>
