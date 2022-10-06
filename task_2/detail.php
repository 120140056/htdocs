<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>RB-Christian-120140056-Tugas2-Pemweb</title>
    </head>
    <style>
        * {
            margin: 10;
            padding: 10;
            box-sizing: border-box;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        body {
            width: 100%;
            height: 100%;
            text-align: center;
            vertical-align: middle;
            justify-content: center;
            padding-right: 15px;
            padding-bottom: 15px;
            background: linear-gradient(100deg, #33D2FF, #56FF33);
        }
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        td, th {
            border: 1px solid #000000;
            text-align: left;
            padding: 10px;
            background: linear-gradient(100deg, #090979, #00d4ff);
        }
    </style>
    <body>
        <h1>TOP UP BERHASIL!!</h1>
        <table>
            <tr>
                <th>ID Pelanggan</th>
                <td><?php echo $_GET['ID'];?></td>
            </tr>
            <tr>
                <th>Platform</th>
                <td><?php echo $_GET['Game'];?></td>
            </tr>
            <tr>
                <th>Nominal Top Up</th>
                <td><?php echo $_GET['TopUp'];?></td>
            </tr>
        </table>
        <h3>TERIMA KASIH TELAH TOP UP DI 120140056 GAME SHOP!!</h3>
    </body>
</html>