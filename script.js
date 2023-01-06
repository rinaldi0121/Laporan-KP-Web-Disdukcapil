function buatSurat(){
    let romawi;
    const select = document.getElementById('bidang');
    const nomorBidang = select.options[select.selectedIndex].value;
    const input = document.getElementById('nomor');
    const date = new Date();
    const tahun = date.getFullYear();
    const value = input.value;
    toString(value);          
    switch (nomorBidang) {
      case "800":
      case "900":
        romawi = "I";
        break;
      case "518":
        romawi = "II";
        break;
      case "473":
        romawi = "III";
        break;
      default:
        romawi = "IV";
        break;
    }
    return document.getElementById("tampil").innerHTML = nomorBidang + " / " + value + " / " + romawi + " / " + tahun;
}

function copyToClipboard(value) {
  navigator.clipboard.writeText(value)
}

function copy() {
  // Get the output of the buatSurat function
  const copy = buatSurat();

  // Copy the output to the clipboard
  copyToClipboard(copy);
  alert("Nomor sudah dicopy");
}

