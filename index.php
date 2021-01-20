<!DOCTYPE html>
<html>

<script>
    window.location = "vista.php"
</script>

<body>
    <a href="http://localhost/server_php/"></a>
    <?php
    echo "Hello World!";
    ?>

    <span><a style="float: right; background: rebeccapurple; color: white;" href="https://www.w3schools.com/php/php_ajax_database.asp"> w3schools </a></span>

    <br>
    <br>
    <br>

    <?php
    $servername = "localhost";
    $username = "root";
    $password = "1234567";
    $dbname = "php";


    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id, username, password FROM user";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"] . " - Name: " . $row["username"] . " " . $row["password"] . "<br>";
        }
    } else {
        echo "0 results";
    }
    $conn->close();
    ?>

    <br>
    <br>
    <br>
    <br>


    <form>
        <select name="users" onchange="showUser(this.value)">
            <option value="">mostrar todos</option>
            <option value="1">admin</option>
            <option value="2">vendedor</option>
            <option value="3">contador</option>
            <option value="4">caja</option>
        </select>
    </form>
    <br>
    <div id="txtHint"><b>Person info will be listed here.</b></div>



    <script>
        function showUser(str) {
            if (str == "") {
                document.getElementById("txtHint").innerHTML = "";
                return;
            }
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("txtHint").innerHTML = this.responseText;
                }
            }
            xmlhttp.open("GET", "getuser.php?q=" + str, true);
            xmlhttp.send();
        }
    </script>

</body>

</html>