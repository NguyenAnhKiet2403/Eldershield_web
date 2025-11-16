import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900">Eldershield</span>
            </div>
            <p className="text-gray-600">
              Bảo vệ bạn khỏi các cuộc gọi và tin nhắn lừa đảo với công nghệ AI tiên tiến.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-blue-600">
                  Tính năng
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-600 hover:text-blue-600">
                  Tải xuống
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">Tài nguyên</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/safety-tips" className="text-gray-600 hover:text-blue-600">
                  Tips cảnh giác
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                  Về chúng tôi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>support@eldershield.vn</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>1900 xxxx</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2025 Eldershield. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}
