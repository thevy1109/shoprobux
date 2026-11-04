// Điền Project URL và anon key trong Supabase > Project Settings > API.
// Anon key được phép công khai khi đã cấu hình RLS đúng. TUYỆT ĐỐI không đưa service_role key vào website.
window.REMROBUX_CONFIG = {
  SUPABASE_URL: "https://YOUR_PROJECT_ID.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY",
  BANK_NAME: "YOUR_BANK_NAME",
  BANK_ACCOUNT: "YOUR_ACCOUNT_NUMBER",
  BANK_OWNER: "YOUR_ACCOUNT_HOLDER",
  // Tên miền VietQR công khai; kiểm tra điều khoản và thông tin ngân hàng trước khi dùng.
  VIETQR_TEMPLATE: "https://img.vietqr.io/image"
};