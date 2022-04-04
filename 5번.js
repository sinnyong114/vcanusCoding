let pond = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

let pondWidth = pond[0].length; // 연못의 가로길이
let pondHeight = pond.length;   // 연못의 세로길이
let maxCount = ((halfW = parseInt(pondWidth / 2)) < (halfH = parseInt(pondHeight / 2))) ? halfW : halfH;   // 연못 깊이 카운트의 최대치


let dx = [-1, 0, 1, 0]; // 가로축의 상하좌우
let dy = [0, 1, 0, -1]; // 세로축의 상하좌우

for(let count = 0; count < maxCount; count++) {
    for(let i = 0; i < pondHeight; i++) {
        for(let j = 0; j < pondWidth; j++) {
            if(pond[i][j] > count) {
                let plusFlag = true;
                for(let k = 0; k < 4; k++) {
                    let nextX = i + dx[k];
                    let nextY = j + dy[k];
                    // 엘리먼트의 좌, 우, 상, 하 중 하나라도 자신보다 작으면 증가대상 제외
                    if((nextX >= 0) && (nextX < pondWidth) && (nextY >= 0) && (nextY < pondHeight) && (pond[nextX][nextY] < pond[i][j])) {
                        plusFlag = false;
                        break;
                    }
                }
                if(plusFlag) pond[i][j]++;
            }
        }
    }
}

// 연못과 연못깊이의 출력
let depthSum = 0;
for(let i = 0; i < pondHeight; i++) {
    let line = "";
    for(let j = 0; j < pondWidth; j++) {
        depthSum = depthSum + pond[i][j];
        line = line + " " + pond[i][j];
    }
    console.log(line);
}
console.log("연못 물 깊이의 총합은 "+depthSum);
