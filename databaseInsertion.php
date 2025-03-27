<?php
// Database connection
$servername = "localhost";
$username = "root"; // change as needed
$password = "";// change as needed
$dbname = "spotifyunwrapped3033";// change as needed

// Create connection
$dbconnection = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($dbconnection->connect_error) {
    die("Connection failed: " . $dbconnection->connect_error);
}
/*
        ***    FUNCTION DEFINITION deleteAllData()     ***
    Purpose: Ensure that all data that was previously stored in data.txt is gone
    Parameters: None
    Comments: This function allows the same php file to be ran multiple times without clogging up
    the tables on the main database
*/
function deleteAllData(){
  $user = 'root';// change as needed
  $pass = '';// change as needed
  $db = 'spotifyunwrapped3033';// change as needed
  $dbconnection = new mysqli('localhost', $user, $pass, $db) or die("Unable to connect");
  $dbconnection->query("TRUNCATE TABLE topGenres;") or die("Error, could not truncate topGenres");
  $dbconnection->query('TRUNCATE TABLE topArtists;') or die("Error, could not truncate topArtists");
  $dbconnection->query('TRUNCATE TABLE topSongs;') or die("Error, could not truncate topSongs");
  $dbconnection->query('TRUNCATE TABLE savedTracks;') or die("Error, could not truncate topLetter");
  $dbconnection->query('TRUNCATE TABLE topLetter;') or die("Error, could not truncate topLetter");

}
//    **    READ IN DATA THAT WAS RECIEVED FROM USER IN DATA.TXT AND INSERT IT INTO THE DATABASE    **
$fp = fopen("data.txt","r") or die("Unable to open file!");
$queryCount =1;
while (($line = fgets($fp)) !== false) {

  $line = trim($line); // remove whitespaces to make errors not happen
  $values = explode(",", $line); // comma seperate 

  if($queryCount==1){ //artists
      $query = 'INSERT INTO topArtists (userID, firstArtist, secondArtist, thirdArtist, fourthArtist, fifthArtist)
                VALUES (?, ?, ?, ?, ?, ?)';
      $stmt = $dbconnection->prepare($query);
      // fill in blanks w bind param with strings (s) as arguments
      $stmt->bind_param("ssssss", $values[0], $values[1], $values[2], $values[3], $values[4], $values[5]);

      if(!$stmt->execute()){
          die("Error executing query: " . $stmt->error);
      }

      echo"Artists inserted successfully<br>";
      $queryCount++;
  }

  else if($queryCount==2){ //songs
    $query = 'INSERT INTO topSongs (userID, firstSong, secondSong, thirdSong, fourthSong, fifthSong)
    VALUES (?, ?, ?, ?, ?, ?)';
    $stmt = $dbconnection->prepare($query);
    // fill in blanks w bind param with strings (s) as arguments
    $stmt->bind_param("ssssss", $values[0], $values[1], $values[2], $values[3], $values[4], $values[5]);

    if(!$stmt->execute()){
        die("Error executing query: " . $stmt->error);
    }

    echo "Songs inserted successfully<br>";
    $queryCount++;
  }

  else{ //thur saved tracks
    $query = 'INSERT INTO topTracks (userID, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    $stmt = $dbconnection->prepare($query);
    // fill in blanks w bind param with strings (s) as arguments
    $stmt->bind_param("sssssssssssssssssssss", 
    $values[0], $values[1], $values[2], $values[3], $values[4], $values[5], 
      $values[6], $values[7], $values[8], $values[9], $values[10], $values[11], 
      $values[12], $values[13], $values[14], $values[15], $values[16], $values[17], 
      $values[18], $values[19], $values[20]);
    if(!$stmt->execute()){
        die("Error executing query: " . $stmt->error);
    }

    echo "tracks inserted successfully<br>";
    die();
  }
}
fclose($fp);

?>
