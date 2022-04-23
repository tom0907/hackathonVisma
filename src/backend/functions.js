import {uploadImage} from "src/database/databaseHandler"

var reader = new FileReader();

function execUpload(){
    document.getElementById('file').click();
    document.getElementById('file').addEventListener("change", function (ev) {
        let file = document.getElementById('file').files[0];
        reader.readAsDataURL(file);
        uploadImage(reader.result);
    })
}

function generateQR(url) {

    var qrCode = new QRCode(document.getElementById("qr"), {
        width : 512,
        height : 512
    });
    qrCode.makeCode(url);

}

