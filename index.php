<!DOCTYPE html>
<html>


<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

<body>







    <div class="container ">



        <?php
        echo "Hello World!";
        ?>




        <div class="row inline">
            Id: <input id="varid" type="text" value="110">
            User: <input id="varusername" type="text" value="marta">
            Password: <input id="varpassword" type="text" value="1234567">

            Tipo: <select id="vartipo" type="text">
                <option>mostrar todos</option>
                <option value="admin">admin</option>
                <option value="vendedor">vendedor</option>
                <option value="contador">contador</option>
                <option value="cajero">cajero</option>
            </select>

            <button id="btn-guardar" type="button" onclick="guardar()">Guardar</button>
            <button id="btn-actualizar" type="button" style="display: none;" onclick="actualizar()">Actulizar</button>

            <br>
            <br>
            <hr>
            <br>

            <table id="tabla-informacion">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>user name</th>
                        <th>password</th>
                        <th>tipo</th>

                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>


        </div>

    </div>
    <br>
    <br>
    <button type="button" class="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    <script src="controlador.js"></script>

</body>

</html>