"use client"

import { useEffect } from "react"
import{ Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b59ac6e4-c5cb-40dc-ad48-822f6a874eee")
  }, [])

  return null
}
