import setZero from "./zero";

/**
 * 获取剩余时间
 * @param {startTime} [string,number][require]  开始时间
 * @param {endTime} [string,number][require]   结束时间
 * @param {range} [string,number][require] 时间范围
 */

export default function reverse(startTime, endTime, range) {
  let muster = [
    { text: "日", value: 24 * 60 * 60 * 1000 },
    { text: "时", value: 60 * 60 * 1000 },
    { text: "分", value: 60 * 1000 },
    { text: "秒", value: 1000 }
  ];
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
      muster[n]["backTime"] = Math.floor(
        (reverseTimes - muster[n - 1]["reverseTime"] * muster[n - 1]["value"]) /
          muster[n]["value"]
      );
    } else {
      muster[n]["backTime"] = value;
    }
  }

  let message = "";

  let index = muster.findIndex(item => {
    return item.backTime > 0;
  });

  for (; index < muster.length; index++) {
    message += setZero(muster[index]["backTime"]) + muster[index]["text"];
  }

  return { muster, message: message };
}
