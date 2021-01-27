var usuarios = [];
const url = "/backend_php/api/usuarios.php";
var usuarioSeleccionado;

function obtenerUsuarios() {
  axios({
    method: "GET",
    url: url,
    responseType: "json",
  })
    .then((res) => {
      this.usuarios = res.data;
      console.log("framework axios: " + res.data);
      llenartabla();
    })
    .catch((error) => {
      console.error(error);
    });
}

obtenerUsuarios();

function llenartabla() {
  document.querySelector("#tabla-informacion tbody").innerHTML = "";
  for (let i = 0; i < usuarios.length; i++) {
    document.querySelector("#tabla-informacion tbody").innerHTML += `<tr>
        <td>${usuarios[i].userId}</td>
        <td>${usuarios[i].userName}</td>
        <td>${usuarios[i].password}</td>
        <td>${usuarios[i].tipo}</td>
        <td> <button type="button" class="btn btn-success" onclick="seleccionarUsuario(${i})"> update </button> </td>
        <td> <button type="button" class="btn btn-danger" onclick="eliminarUsuario(${i})"> delete </button> </td>
        </tr>  `;
  }
}

//     >  <  [ ]  {  }        h        g     #

function guardar() {
    document.getElementById("btn-guardar").disabled = true;
    document.getElementById("btn-guardar").innerHTML = 'Guardando...';

  let usuario1 = {
    userId: $("#varid").val(),
    userName: $("#varusername").val(),
    password: $("#varpassword").val(),
    tipo: $("#vartipo").val(),
  };
  console.log("php function guardar: " + usuario1);
  axios({
    method: "POST",
    url: url,
    responseType: "json",
    data: usuario1,
  })
    .then((res) => {
      console.log("framework axios: " + res.data);
      limpiar();
      obtenerUsuarios();
      document.getElementById("btn-guardar").disabled = false;
      document.getElementById("btn-guardar").innerHTML = 'Guardar';

    })
    .catch((error) => {
      console.error(error);
    });
}

function seleccionarUsuario(indice) {
  usuarioSeleccionado = indice;
  console.log("php function seleccionar: " + indice);
  axios({
    method: "GET",
    url: url + `?id=${indice}`,
    responseType: "json",
  })
    .then((res) => {
      console.log("framework axios: " + res.data);
      document.getElementById("varid").value = res.data.userId;
      document.getElementById("varusername").value = res.data.userName;
      document.getElementById("varpassword").value = res.data.password;
      document.getElementById("vartipo").value = res.data.tipo;
      document.getElementById("btn-guardar").style.display = "none";
      document.getElementById("btn-actualizar").style.display = "block";
    })
    .catch((error) => {
      console.error(error);
    });
}

function actualizar() {
  let usuario1 = {
    userId: $("#varid").val(),
    userName: $("#varusername").val(),
    password: $("#varpassword").val(),
    tipo: $("#vartipo").val(),
  };
  console.log("php function actualizar: " + usuario1);
  axios({
    method: "PUT",
    url: url + `?id=${usuarioSeleccionado}`,
    responseType: "json",
    data: usuario1,
  })
    .then((res) => {
      console.log("framework axios: " + res.data);
      limpiar();
      obtenerUsuarios();
    })
    .catch((error) => {
      console.error(error);
    });
}

function eliminarUsuario(indice) {
  console.log("php function eliminar: " + indice);
  axios({
    method: "DELETE",
    url: url + `?id=${indice}`,
    responseType: "json",
  })
    .then((res) => {
      this.usuarios = res.data;
      console.log("framework axios: " + res.data);
      limpiar();
      obtenerUsuarios();
    })
    .catch((error) => {
      console.error(error);
    });
}

function limpiar() {
  document.getElementById("varid").value = null;
  document.getElementById("varusername").value = null;
  document.getElementById("varpassword").value = null;
  document.getElementById("vartipo").value = null;
  document.getElementById("btn-guardar").style.display = "inline";
  document.getElementById("btn-actualizar").style.display = "none";
}

/*window.alert("" + $("#vartipo").val());
console.log("" + $("#vartipo").val());
window.location = "vista.php"*/

/*
     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.esm.min.js" integrity="sha384-Eg5XYZrb+x0FMnsSAcaUNc6vJ/6B47jQvyhan3IGKcCfko9Hq6vS3s1PviSpNbdE" crossorigin="anonymous"> </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.esm.min.js" integrity="sha384-Eg5"></script>
*/
