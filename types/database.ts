export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          title: string
          slug: string
          description: string
          price_cents: number
          video_url: string | null
          pdf_url: string | null
          materials: string[] | null
          theme_week: string | null
          created_at: string
          stripe_price_id: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description: string
          price_cents: number
          video_url?: string | null
          pdf_url?: string | null
          materials?: string[] | null
          theme_week?: string | null
          created_at?: string
          stripe_price_id?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string
          price_cents?: number
          video_url?: string | null
          pdf_url?: string | null
          materials?: string[] | null
          theme_week?: string | null
          created_at?: string
          stripe_price_id?: string | null
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string
          stripe_subscription_id: string
          stripe_customer_id: string
          status: string
          current_period_start: string
          current_period_end: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          stripe_subscription_id: string
          stripe_customer_id: string
          status: string
          current_period_start: string
          current_period_end: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          stripe_subscription_id?: string
          stripe_customer_id?: string
          status?: string
          current_period_start?: string
          current_period_end?: string
          created_at?: string
          updated_at?: string
        }
      }
      purchases: {
        Row: {
          id: string
          user_id: string
          product_id: string
          stripe_payment_intent_id: string
          amount_cents: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          stripe_payment_intent_id: string
          amount_cents: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          stripe_payment_intent_id?: string
          amount_cents?: number
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 