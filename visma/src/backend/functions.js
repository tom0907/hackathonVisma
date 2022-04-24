import {uploadImage} from "src/database/databaseHandler"

var reader = new FileReader();

function execUpload(){
    document.getElementById('uploadfile').click();
    document.getElementById('uploadfile').addEventListener("change", function (ev) {
        let file = document.getElementById('uploadfile').files[0];
        reader.readAsDataURL(file);
        return uploadImage(reader.result);
    })
}

function generateQR(url) {

    var qrCode = new QRCode(document.getElementById("qr"), {
        width : 512,
        height : 512
    });
    qrCode.makeCode(url);

}

function execDownload() {
    document.getElementById('downloadfile').src = getImage(document.getElementById('downloadfile'));
};

