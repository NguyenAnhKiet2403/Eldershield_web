import {
  PhoneCall,
  Shield,
  MessageSquare,
  QrCode,
  Users,
  MapPin,
  Mic,
  Database,
  Brain,
  AlertTriangle,
  Lock,
  Zap,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import canhbaocuocgoi from "./canhbaocuocgoi.png";
import canhbaonguoithan from "./canhbaonguoithan.png";
import cuocgoiblacklist from "./cuocgoiblacklist.png";
import dinhvinguoithan from "./dinhvinguoithan.png";
import tinnhanluadao from "./tinnhanluadao.png";
import QRluadao from "./QRluadao.png";

export function FeaturesPage() {
  const mainFeatures = [
    {
      icon: PhoneCall,
      title: 'Cảnh báo lừa đảo thời gian thực trong cuộc gọi',
      description:
        'Công nghệ AI của chúng tôi chuyển đổi giọng nói thành văn bản trong thời gian thực, sau đó phân tích ngữ cảnh cuộc trò chuyện để phát hiện các dấu hiệu lừa đảo. Hệ thống sẽ đưa ra cảnh báo ngay lập tức khi phát hiện ngôn ngữ hoặc kịch bản đáng ngờ.',
      features: [
        'Chuyển đổi giọng nói sang văn bản thời gian thực',
        'Phân tích ngữ cảnh và phát hiện mẫu lừa đảo',
        'Cảnh báo tức thì ngay trong cuộc gọi',
        'Học máy liên tục từ các mẫu lừa đảo mới',
      ],
      image: canhbaocuocgoi,
    },
    {
      icon: Shield,
      title: 'Cảnh báo số trong blacklist gọi tới',
      description:
        'Ứng dụng tự động kiểm tra mọi cuộc gọi đến với cơ sở dữ liệu blacklist được cập nhật liên tục. Khi phát hiện số điện thoại có trong danh sách đen, Eldershield sẽ hiển thị cảnh báo ngay trên màn hình cuộc gọi.',
      features: [
        'Cơ sở dữ liệu blacklist cập nhật hàng ngày',
        'Kiểm tra tức thì khi có cuộc gọi đến',
        'Hiển thị mức độ nguy hiểm của số điện thoại',
        'Cho phép người dùng báo cáo số lừa đảo mới',
      ],
      image: cuocgoiblacklist,
    },
    {
      icon: MessageSquare,
      title: 'Cảnh báo lừa đảo qua tin nhắn',
      description:
        'Eldershield quét tất cả tin nhắn đến, kiểm tra số điện thoại người gửi với cơ sở dữ liệu blacklist. Tin nhắn từ các số đáng ngờ sẽ được đánh dấu và bạn nhận được cảnh báo ngay lập tức.',
      features: [
        'Quét tin nhắn tự động khi nhận được',
        'Phân tích nội dung tin nhắn tìm dấu hiệu lừa đảo',
        'Đánh dấu và phân loại tin nhắn nguy hiểm',
        'Chặn tin nhắn spam tự động',
      ],
      image: tinnhanluadao,
    },
    {
      icon: Users,
      title: 'Gửi cảnh báo tới người thân',
      description:
        'Khi phát hiện bạn đang tương tác với các hành vi lừa đảo nguy hiểm, Eldershield tự động gửi cảnh báo đến những người thân đã được thiết lập. Tính năng này giúp gia đình có thể kịp thời can thiệp và bảo vệ bạn.',
      features: [
        'Thiết lập danh sách liên hệ khẩn cấp',
        'Gửi cảnh báo tự động khi phát hiện nguy hiểm',
        'Bao gồm thông tin chi tiết về cuộc gọi/tin nhắn đáng ngờ',
        'Cho phép người thân phản hồi và hỗ trợ',
      ],
      image: canhbaonguoithan,
    },
    {
      icon: QrCode,
      title: 'Quét QR kiểm tra lừa đảo',
      description:
        'Tính năng quét QR code thông minh giúp bạn kiểm tra link dẫn đến và thông tin ngân hàng trước khi truy cập. Hệ thống sẽ phân tích và cảnh báo nếu phát hiện dấu hiệu liên kết đến trang web lừa đảo hoặc tài khoản ngân hàng đáng ngờ.',
      features: [
        'Quét và phân tích QR code nhanh chóng',
        'Kiểm tra link với cơ sở dữ liệu phishing',
        'Xác minh thông tin ngân hàng',
        'Cảnh báo trước khi mở link nguy hiểm',
      ],
      image: QRluadao,
    },
    {
      icon: MapPin,
      title: 'Định vị và thông báo khẩn cấp',
      description:
        'Trong trường hợp khẩn cấp, Eldershield có thể gửi thông báo và vị trí truy cập internet cuối cùng của bạn đến người thân. Tính năng này đặc biệt hữu ích khi có dấu hiệu người dùng có thể đang gặp nguy hiểm.',
      features: [
        'Ghi nhận vị trí truy cập internet cuối cùng',
        'Gửi thông báo khẩn cấp đến người thân',
        'Tích hợp với dịch vụ định vị',
        'Tự động kích hoạt khi phát hiện tình huống nguy hiểm',
      ],
      image: dinhvinguoithan,
    },
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: 'AI thông minh',
      description: 'Học máy liên tục từ các mẫu lừa đảo mới nhất',
    },
    {
      icon: Zap,
      title: 'Xử lý nhanh',
      description: 'Phản ứng và cảnh báo trong thời gian thực',
    },
    {
      icon: Database,
      title: 'Cơ sở dữ liệu lớn',
      description: 'Cập nhật hàng ngày với hàng triệu số lừa đảo',
    },
    {
      icon: Lock,
      title: 'Bảo mật cao',
      description: 'Dữ liệu được mã hóa và bảo vệ tuyệt đối',
    },
    {
      icon: AlertTriangle,
      title: 'Cảnh báo đa cấp',
      description: 'Phân loại mức độ nguy hiểm rõ ràng',
    },
    {
      icon: Mic,
      title: 'Nhận diện giọng nói',
      description: 'Công nghệ nhận diện tiếng Việt chính xác',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-4">Tính năng bảo vệ toàn diện</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Eldershield kết hợp công nghệ AI tiên tiến với cơ sở dữ liệu cập nhật liên tục để mang đến sự bảo vệ tối ưu cho bạn và gia đình khỏi các hành vi lừa đảo qua điện thoại.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h2 className="text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Và nhiều tính năng khác</h2>
            <p className="text-gray-600">
              Eldershield được thiết kế với nhiều tính năng bổ sung để đảm bảo sự bảo vệ tối đa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
