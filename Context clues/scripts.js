$(document).ready(function () {
    var friends = ["Jeremiah", "Robert", "Fatima", "Eric", "Cimi"];
    var locations = ["Target", "Wallmart", "UAB", "Clubhouse", "TJMax", "Fivebelow", "Ulta", "SaksFifth", "Galleria", "LeedsMall"];
    var weapons = ["Knife", "Fork", "Wand", "Pen", "Scissors", "Gun", "Chains", "", "Bottle", "pistol", "Rope", "phaser", "BullWhip", "AK-47s", "Rock", "MaximGun", "Uzi", "pike", "Sabre", "Bayonet"];

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $($h3).appendTo("main");
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];
        function accuAlert() {
            alert("Accusation " + i + ": I accuse " + friend + ", with the " + weapon + " in the " + location + "!");
        }
        return accuAlert;
    }
});