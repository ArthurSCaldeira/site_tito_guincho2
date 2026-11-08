function falarWhatsApp() {
    const numero = "5511977638719"; // COLOQUE SEU NÚMERO AQUI
    const mensagem = "Olá, preciso de um guincho agora!";
    
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
}
