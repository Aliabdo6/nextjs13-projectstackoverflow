import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (
  createdAt: Date
): string => {
  const now = new Date();
  const timeDifference =
    now.getTime() - createdAt.getTime();

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (timeDifference < minute) {
    const seconds = Math.floor(
      timeDifference / 1000
    );
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(
      timeDifference / minute
    );
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifference < day) {
    const hours = Math.floor(
      timeDifference / hour
    );
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (timeDifference < month) {
    const weeks = Math.floor(
      timeDifference / week
    );
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (timeDifference < year) {
    const months = Math.floor(
      timeDifference / month
    );
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(
      timeDifference / year
    );
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};

export const formatAndDivideNumber = (
  inputNumber: number
): string => {
  if (inputNumber >= 1000000) {
    return (
      (inputNumber / 1000000).toFixed(1) + "M"
    );
  } else if (inputNumber >= 1000) {
    return (inputNumber / 1000).toFixed(1) + "k";
  } else {
    return inputNumber.toString();
  }
};
