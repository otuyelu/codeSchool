/**
 * https://www.codingame.com/ide/puzzle/coders-strike-back
 * Once per race you may substitute your desired thrust with the keyword BOOST to grant your pod a burst of speed.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    var x = parseInt(inputs[0]);
    var y = parseInt(inputs[1]);
    var nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    var nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    var nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    var nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    var opponentX = parseInt(inputs[0]);
    var opponentY = parseInt(inputs[1]);
    var boostUsed = false;

    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    if(nextCheckpointDist < 600){
        thrust = 50;
    }else if(nextCheckpointAngle > 90 || nextCheckpointAngle < -90){
        thrust = 50;
    }else{
        thrust = 100;
    }
    if(boostUsed === false && nextCheckpointDist > 10000 && nextCheckpointAngle === 0){
        print(nextCheckpointX + ' ' + nextCheckpointY + ' BOOST');
        boostUsed = true;
    }else{
        print(nextCheckpointX + ' ' + nextCheckpointY + ' '+thrust);
    }
}
