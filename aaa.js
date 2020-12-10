alert('selamat datang')       
function simpan()
{
    // get input values
    var Nama = document.getElementById('Nama').value;
     var Pesanan = document.getElementById('Pesanan').value;
      var Jumlah = document.getElementById('Jumlah').value;
      
      // get the html table
      // 0 = the first table
      var table = document.getElementsByTagName('table')[0];
      
      // add new empty row to the table
      // 0 = in the top 
      // table.rows.length = the end
      // table.rows.length/2+1 = the center
      var newRow = table.insertRow(table.rows.length/2+1);
      
      // add cells to the row
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      
      // add values to the cells
      cel1.innerHTML = Nama;
      cel2.innerHTML = Pesanan;
      cel3.innerHTML = Jumlah;
}