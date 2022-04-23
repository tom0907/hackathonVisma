import {uploadImage} from "src/database/databaseHandler"

var reader = new FileReader();
var ftp = new Packages.org.apache.commons.net.ftp.FTPClient();

function execUpload(){
    document.getElementById('file').click();
    document.getElementById('file').addEventListener("change", function (ev) {
        let file = document.getElementById('file').files[0];
        reader.readAsDataURL(file);
        uploadImage(reader.result);
    })
}

