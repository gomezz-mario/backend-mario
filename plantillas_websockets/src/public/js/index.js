const socket = io();
const tablaProducts = document.getElementById('tabla-products').getElementsByTagName('tbody')[0];

const btnRegistrarProduct = document.getElementById("btn-registrar-producto");
console.log(btnRegistrarProduct);
btnRegistrarProduct.addEventListener("click", () => {
	let title = document.getElementById("campo-nombre").value;
	let description = document.getElementById("campo-descripcion").value;
	let price = document.getElementById("campo-precio").value;
	let code = document.getElementById("campo-codigo").value;

	//validar campos
	
	socket.emit('add_product', {title, description, price, code});
});

socket.on('update_products', products => {
	const allElements = products.map(product => 
		`
		<tr id="${product.id}">
			<td scope="col" style="width: 20%;">${product.title}</td>
			<td scope="col" style="width: 50%;">${product.description}</td>
			<td scope="col" style="width: 20%;" class="text-end">$${product.price}</td>
			<td scope="col" style="width: 10%;">
				<button type="button" class="btn btn-outline-dark me-2" onclick="deleteProduct('${product.id}')">
					<i class='bi bi-trash3-fill'></i>
				</button>
			</td>
		</tr>`
	);
	tablaProducts.innerHTML = allElements.join(" ");
});

const deleteProduct = (id) => {
	socket.emit('delete_product', id);
}