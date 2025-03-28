<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BIOS Setup Utility</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="bios-container">
        <h1>BIOS Setup Utility</h1>
        <h2>System Information</h2>
        <table>
            <tr><td>BIOS Version:</td><td><?php echo "v0.00"; ?></td></tr>
            <tr><td>Processor:</td><td><?php echo "0.00 GHz"; ?></td></tr>
            <tr><td>Memory Installed:</td><td><?php echo "0MB DDR RAM"; ?></td></tr>
            <tr><td>Hard Disk:</td><td><?php echo "0GB IDE HDD"; ?></td></tr>
            <tr><td>Video Card:</td><td><?php echo "MX 0"; ?></td></tr>
            <tr><td>Boot Order:</td><td><?php echo "1. Floppy Drive<br>2. Hard Disk<br>3. CD-ROM"; ?></td></tr>
        </table>
        <div class="footer">
            <p><a href="fallback.php">[ ↑ ↓ ]</a> Navigate | <a href="fallback.php">[Enter]</a> Select | <a href="fallback.php">[ESC]</a> Exit</p>
        </div>
    </div>
</body>
</html>