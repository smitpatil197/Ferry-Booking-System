<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name       = $_POST['name'] ?? '';
    $email      = $_POST['email'] ?? '';
    $phone      = $_POST['phone'] ?? '';
    $date       = $_POST['date'] ?? '';
    $passengers = $_POST['passengers'] ?? '';
    $ferry_type = $_POST['ferry_type'] ?? '';

    $data = "Name: $name\nEmail: $email\nPhone: $phone\nDate: $date\nPassengers: $passengers\nFerry Type: $ferry_type\n-------------------\n";

    // Save to text file in the same folder
    $saved = file_put_contents("bookings.txt", $data, FILE_APPEND);

    if ($saved !== false) {
        header("Location: confirm.html");
        exit();
    } else {
        echo "❌ Error saving data to file.";
    }
} else {
    echo "⚠️ Invalid request method.";
}
?>
