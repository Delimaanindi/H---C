<!-- syntax for ccreating variables and concatinate into string-->
<?php /* $exam= 3 * 5;
echo "I love number $total!";*/
?>

<!-- integration of function and variable (array)-->
<?php /* $number = [1, 2, 3];

function w_num() {
    echo "daily active user: $number";
}

w_num();

echo "daily active user: $number[2]";
?>

// in every end of variable or function declaration give ;

// global and local scope (variables)
// global: can be used within and called outside a function, placed outside function
// #1:
    function this() {
        $number = 7;
        echo "I love number $number";
}
this();

#2:
$r = 4;
$s = 5;

function that() {
    global $r, $s;
    $z = $r + $s;
}

that()
echo "that is $z"
$r = 7
$s = 10
function also() {
    $GLOBALS['r'], $GLOBALS['s'];
    $GLOBALS['z'] = $GLOBALS['r'] + $GLOBALS['s']
}
<!DOCTYPE html>
<html>
<body>

<?php
$dream = "NCT";
echo "My first PHP script! $dream";

function trial() {
echo "<h1>Hi, Welcome!</h1>";
}
trial();

function wnum() {
$num = [1, 2, 3, 4];
echo "I love number $num[1]";
}

wnum();
$r = 7;
$s = 10;

function also() {
    $GLOBALS['z'] = $GLOBALS['r'] + $GLOBALS['s'];
}

also();
echo "I'd rather choose $z";
?> 

</body>
</html>
