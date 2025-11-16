import { Link } from 'react-router-dom';
import logo from "./logo.png";
import {
  Shield,
  PhoneCall,
  MessageSquare,
  QrCode,
  Users,
  MapPin,
  Bell,
  ChevronRight,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      icon: PhoneCall,
      title: 'Cảnh báo cuộc gọi thời gian thực',
      description:
        'AI phân tích giọng nói và ngữ cảnh cuộc trò chuyện để phát hiện lừa đảo ngay lập tức',
    },
    {
      icon: Shield,
      title: 'Blacklist số điện thoại',
      description:
        'Cảnh báo ngay khi nhận cuộc gọi từ các số trong danh sách đen lừa đảo',
    },
    {
      icon: MessageSquare,
      title: 'Lọc tin nhắn lừa đảo',
      description:
        'Kiểm tra và cảnh báo tin nhắn từ các số điện thoại có dấu hiệu lừa đảo',
    },
    {
      icon: QrCode,
      title: 'Quét QR an toàn',
      description:
        'Phát hiện link lừa đảo và thông tin ngân hàng đáng ngờ qua mã QR',
    },
    {
      icon: Users,
      title: 'Bảo vệ người thân',
      description:
        'Gửi cảnh báo đến gia đình khi phát hiện tương tác với hành vi lừa đảo',
    },
    {
      icon: MapPin,
      title: 'Định vị khẩn cấp',
      description:
        'Gửi thông báo và vị trí truy cập internet cuối cùng khi cần thiết',
    },
  ];

  const stats = [
    { value: '99%', label: 'Độ chính xác' },
    { value: '24/7', label: 'Bảo vệ liên tục' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span>Công nghệ AI tiên tiến</span>
              </div>
              <h1 className="text-gray-900 mb-6">
                Bảo vệ bạn khỏi mọi cuộc gọi và tin nhắn lừa đảo
              </h1>
              <p className="text-gray-600 mb-8">
                Eldershield sử dụng AI phân tích thời gian thực để nhận diện và cảnh báo các hành vi lừa đảo qua điện thoại, tin nhắn và QR code. Bảo vệ bạn và gia đình 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/download"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Tải xuống miễn phí
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/features"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Xem tính năng
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={logo}
                  alt="Eldershield App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Đã chặn hôm nay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Tính năng bảo vệ toàn diện
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eldershield cung cấp giải pháp bảo vệ đa lớp, từ nhận diện số lừa đảo đến phân tích cuộc gọi thời gian thực bằng AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              Xem tất cả tính năng
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={logo}
                alt="How it works"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">
                Hoạt động như thế nào?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Tải và cài đặt</h3>
                    <p className="text-gray-600">
                      Tải Eldershield từ App Store hoặc Google Play, cài đặt trong vài giây.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Kích hoạt bảo vệ</h3>
                    <p className="text-gray-600">
                      Cấp quyền cần thiết để Eldershield có thể bảo vệ bạn khỏi các cuộc gọi và tin nhắn lừa đảo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">An tâm mỗi ngày</h3>
                    <p className="text-gray-600">
                      Eldershield tự động bảo vệ bạn 24/7 với AI phân tích thời gian thực.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Sẵn sàng bảo vệ bản thân và gia đình?
          </h2>
          <p className="text-blue-100 mb-8">
            Tải Eldershield ngay hôm nay và trải nghiệm sự an tâm với công nghệ bảo vệ AI hàng đầu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/download"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Tải xuống miễn phí
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
