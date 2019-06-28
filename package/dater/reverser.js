import zer from "./zer";
import checker from "./checker";
/**
 * @name 获取剩余时间
 * @param { startTime } [string,number]  开始时间
 * @param { endTime } [string,number]   结束时间
 * @param { range } [string,number] 时间范围
 * @example console.log(reverser("2019-06-29", new Date(), 10 * 1000));
 */

export default function reverser(startTime, endTime, range) {
  if (!checker(startTime)) throw new Error("The first argument must be a valid date.");
  if (!checker(endTime)) throw new Error("The second argument must be a valid date.");
  if (typeof range !== "number") throw new Error("The third argument must be number.");
  let muster = [{ text: "日", value: 24 * 60 * 60 * 1000 }, { text: "时", value: 60 * 60 * 1000 }, { text: "分", value: 60 * 1000 }, { text: "秒", value: 1000 }];
  startTime = +new Date(startTime);
  endTime = +new Date(endTime);
  console.log(endTime - startTime);
  let reverseTime = endTime - startTime;
  let reverseTimes = range - reverseTime;
  if (reverseTimes < 0) return { muster, message: "" };

  for (let n = 0; n < muster.length; n++) {
    let value = Math.floor(reverseTimes / muster[n]["value"]);
    muster[n]["reverseTime"] = value;

    if (n > 0) {
      muster[n]["backTime"] = Math.floor((reverseTimes - muster[n - 1]["reverseTime"] * muster[n - 1]["value"]) / muster[n]["value"]);
    } else {
      muster[n]["backTime"] = value;
    }
  }

  let message = "";

  let index = muster.findIndex(item => {
    return item.backTime > 0;
  });

  for (; index < muster.length; index++) {
    message += zer(muster[index]["backTime"]) + muster[index]["text"];
  }

  return { muster, message: message };
}

//console.log(reverser("2019-06-29", new Date(), 10 * 1000));
