function enviarPedido() {
            // Coletar dados do formulário
            var nome = document.getElementById('nome').value;
            var telefone = document.getElementById('telefone').value;
            var endereco = document.getElementById('endereco').value;
            var tipoPao = document.getElementById('pao').value;
			var tipoCarne = document.getElementById('carne').value;
            var tipobebida = document.getElementById('bebida').value;
            var saladas = document.querySelectorAll('input[name="salada"]:checked');
            var molho = document.querySelector('input[name="molho"]:checked');

            // Construir o corpo do pedido
            var corpoPedido = "Detalhes do Pedido de Sanduíche:\n\n";
            corpoPedido += "Nome: " + nome + "\n";
            corpoPedido += "Telefone: " + telefone + "\n";
            corpoPedido += "Endereço: " + endereco + "\n";
            corpoPedido += "Tipo de Pão: " + tipoPao + "\n";
			corpoPedido += "Tipo de Carne: " + tipoCarne + "\n";
            corpoPedido += "Saladas: ";
					
            saladas.forEach(function(salada) {
                corpoPedido += salada.value + ", ";
            });
			
			
            corpoPedido = corpoPedido.slice(0, -2) + "\n";  // Remover a vírgula final
            corpoPedido += "Molho: " + (molho ? molho.value : "Nenhum selecionado")+ "." + "\n";
			corpoPedido += "Bebida " + tipobebida + "\n";
			
			
			
			corpoPedido = "Detalhes do Pedido de Sanduíche:
					
			Nome: Lucas Gabriel
			Telefone: 2112345786
			Endereço:  Rua rio de janeiro 23
			Tipo de Pão: hot dog
			Tipo de Carne: linguiça mineira
			Saladas:tomate,pimentao,cebola,batatapalha, 
			Molho: BARBIEKILL
			Bebida: Coca-Cola"
			
					
            // Exibir alerta com os detalhes do pedido
			alert(corpoPedido);

            // Construir a mensagem URL-encoded
            var mensagemURL = encodeURIComponent(corpoPedido);


	'		msgurl=encriptada(QEWQEQWEQDADA!@#!@T%$$@#)

			whatsapp: endereço api what com telefone
			

            // Construir a URL do WhatsApp
            var urlWhatsApp = "https://wa.me/+5521967300883/?text=" + mensagemURL;

            // Abrir a URL do WhatsApp em uma nova janela ou guia
            window.open(urlWhatsApp);
        }
