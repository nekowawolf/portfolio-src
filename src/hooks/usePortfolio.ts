'use client'

import { useEffect, useState } from "react"
import { getPortfolio } from "@/services/portfolioService"
import { Portfolio } from "@/types/portfolio"

export const usePortfolio = () => {
  const [data, setData] = useState<Portfolio | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPortfolio = async () => {
    try {
      setLoading(true)
      const result = await getPortfolio()
      setData(result)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPortfolio()
  }, [])

  return { data, loading, error }
}