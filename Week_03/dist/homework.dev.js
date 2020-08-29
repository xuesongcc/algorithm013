"use strict";

// 柠檬水找零钱
var lemonadeChange = function lemonadeChange(bills) {
  var five = 0,
      ten = 0;

  for (var i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      five++;
    } else if (bills[i] == 10) {
      if (five == 0) return false;
      five--;
      ten++;
    } else {
      if (five > 0 && ten > 0) {
        five--;
        ten++;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }

  return false;
}; // 单词接龙


var ladderLength = function ladderLength(beginWord, endWord, wordList) {
  if (!endWord || wordList.indexOf(endWord) == -1) return 0;
  var wordListHash = {};

  for (var i = 0; i < wordList.length; i++) {
    wordListHash[wordList[i]] = true;
    console.log('wordList', wordListHash);
  }

  var genes = 'abcdefghigklmnopqrstuvwxyz';
  var level = 0;
  var queue = [[beginWord, 1]];

  while (queue.length != 0) {
    var curr = queue.pop();
    level = curr[1];

    if (curr[0] == endWord) {
      return level;
    }

    var arrCurr = curr[0];

    for (var i = 0; i < arrCurr.length; i++) {
      for (var r = 0; r < genes.length; r++) {
        if (genes[r] != arrCurr[i]) {
          var strCurr = arrCurr.slice(0, i) + genes[r] + arrCurr.slice(i + 1);

          if (wordListHash[strCurr]) {
            queue.unshift([strCurr, level + 1]);
            wordListHash[strCurr] = false;
          }
        }
      }
    }

    console.log('queue', queue);
  }

  return 0;
};

ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);