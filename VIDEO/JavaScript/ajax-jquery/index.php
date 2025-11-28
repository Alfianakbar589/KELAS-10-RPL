<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AJAX-JQuery Bootstrap PHP</title>

    <script src="js/jquery.js"></script>
    <script src="js/app.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>
    
    <div class="container">
      <div class="row mt-4 text-center">
        <h1>Belajar Ajax JQuery Bootstrap PHP</h1>
      </div>
      <div class="row">
        <div class="col-4">
          <button type="button" id="btn-tambah" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Tambah Pelanggan
          </button>
        </div>
      </div>
      <div class="row mt-4">
        <!-- <div class="col">
          <div class="row">
            <h2>Input Data Pelanggan</h2>
          </div>
          <div class="row">
            <div id="msg">
            </div>
          </div>
        </div> -->

        <div class="col">
          <div class="row">
            <h2>Data Pelanggan</h2>
          </div>
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">no</th>
                  <th scope="col">pelanggan</th>
                  <th scope="col">alamat</th>
                  <th scope="col">telp</th>
                  <th scope="col">hapus</th>
                  <th scope="col">ubah</th>
                </tr>
              </thead>
              <tbody id="isidata">
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="titel">tambah data</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <input type="text" hidden class="form-control" id="id" aria-describedby="emailHelp" required>
                  <label for="exampleInputEmail1" class="form-label">pelanggan</label>
                  <input type="text" class="form-control" id="pelanggan" aria-describedby="emailHelp" required>
                  <div id="emailHelp" class="form-text">harus di isi</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">alamat</label>
                  <input type="text" class="form-control" id="alamat" required>
                  <div id="emailHelp" class="form-text">harus di isi</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">telp</label>
                  <input type="text" class="form-control" id="telp" required>
                  <div id="emailHelp" class="form-text">harus di isi</div>
                </div>
                
                <button type="submit" id="submit" data-bs-dismiss="modal" class="btn btn-success">Simpan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
  </body>
</html>