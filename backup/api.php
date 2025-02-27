<?php
// Set the content type to JSON so the client knows to expect JSON data.
header('Content-Type: application/json');

// Allow requests from any origin (useful during development)
// In production, you may want to restrict this to specific domains.
header('Access-Control-Allow-Origin: *');

// Retrieve the 'q' parameter from the GET request.
$query = isset($_GET['q']) ? $_GET['q'] : '';

// Create an array with the response data.
$response = [
    'message' => "You searched for: $query",
    'query' => $query
];

// Output the response as JSON.
echo json_encode($response);