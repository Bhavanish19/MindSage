import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
 
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 


export function formatDate(input: string | number | Date): string {
  const date = input instanceof Date ? input : new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}


export function formatTimeAgo(input: string | number | Date): string {
  const date = input instanceof Date ? input : new Date(input)
  const now = new Date()
  const secondsPast = (now.getTime() - date.getTime()) / 1000

  if (secondsPast < 60) {
    return 'just now'
  }
  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60)
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  }
  if (secondsPast <= 86400) {
    const hours = Math.floor(secondsPast / 3600)
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  }
  if (secondsPast <= 2592000) {
    const days = Math.floor(secondsPast / 86400)
    return `${days} day${days > 1 ? 's' : ''} ago`
  }
  if (secondsPast <= 31536000) {
    const months = Math.floor(secondsPast / 2592000)
    return `${months} month${months > 1 ? 's' : ''} ago`
  }
  const years = Math.floor(secondsPast / 31536000)
  return `${years} year${years > 1 ? 's' : ''} ago`
}


export function dateRangeParams(searchParams: { from: string; to: string }) {
  if (
    !searchParams.from ||
    isNaN(Date.parse(searchParams.from)) ||
    !searchParams.to ||
    isNaN(Date.parse(searchParams.to))
  ) {
    const dateRange = {
      from: new Date(),
      to: new Date(),
    }
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
    dateRange.from = oneYearAgo

    return dateRange
  }

  return {
    from: new Date(searchParams.from),
    to: new Date(searchParams.to),
  }
}