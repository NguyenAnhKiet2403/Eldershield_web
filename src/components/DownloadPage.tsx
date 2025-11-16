import { Apple, Smartphone, Shield, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from "./logo.png";

export function DownloadPage() {
  const features = [
    'Miễn phí tải xuống và sử dụng',
    'Không yêu cầu thẻ tín dụng',
    'Cài đặt đơn giản trong 2 phút',
    'Hỗ trợ tiếng Việt hoàn toàn',
  ];

  const requirements = {
    android: [
      'Android 8.0 trở lên',
      'Khoảng trống 50MB',
      'Quyền truy cập cuộc gọi và tin nhắn',
      'Kết nối internet',
    ],
    ios: [
      'iOS 13.0 trở lên',
      'iPhone 6s trở lên',
      'Khoảng trống 50MB',
      'Kết nối internet',
    ],
  };

  const steps = [
    {
      step: '1',
      title: 'Tải xuống ứng dụng',
      description: 'Chọn nền tảng phù hợp (iOS hoặc Android) và tải xuống miễn phí',
    },
    {
      step: '2',
      title: 'Cài đặt và mở ứng dụng',
      description: 'Làm theo hướng dẫn cài đặt đơn giản trên màn hình',
    },
    {
      step: '3',
      title: 'Cấp quyền truy cập',
      description: 'Cho phép ứng dụng truy cập cuộc gọi và tin nhắn để bảo vệ bạn',
    },
    {
      step: '4',
      title: 'Hoàn tất và sử dụng',
      description: 'Eldershield sẽ tự động bảo vệ bạn 24/7',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
                <Download className="w-4 h-4" />
                <span>Miễn phí tải xuống</span>
              </div>
              <h1 className="text-gray-900 mb-6">
                Tải Eldershield ngay hôm nay
              </h1>
              <p className="text-gray-600 mb-8">
                Bắt đầu bảo vệ bản thân và gia đình khỏi lừa đảo chỉ trong vài phút. Ứng dụng hoàn toàn miễn phí với đầy đủ tính năng cơ bản.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="opacity-80">Tải về từ</div>
                    <div>App Store</div>
                  </div>
                </button>

                <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="opacity-90">Tải về từ</div>
                    <div>Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={logo}
                alt="Eldershield App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Cài đặt trong 4 bước đơn giản</h2>
            <p className="text-gray-600">
              Bắt đầu sử dụng Eldershield chỉ trong vài phút
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span>{item.step}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Yêu cầu hệ thống</h2>
            <p className="text-gray-600">
              Đảm bảo thiết bị của bạn đáp ứng các yêu cầu sau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900">Android</h3>
              </div>
              <ul className="space-y-3">
                {requirements.android.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Apple className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-gray-900">iOS</h3>
              </div>
              <ul className="space-y-3">
                {requirements.ios.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Câu hỏi thường gặp</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-gray-900 mb-2">
                Ứng dụng có hoàn toàn miễn phí không?
              </h3>
              <p className="text-gray-600">
                Có, phiên bản cơ bản của Eldershield hoàn toàn miễn phí. Chúng tôi cũng có gói Premium với nhiều tính năng nâng cao.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-gray-900 mb-2">
                Ứng dụng có tốn nhiều dung lượng không?
              </h3>
              <p className="text-gray-600">
                Không, Eldershield chỉ tốn khoảng 50MB dung lượng và hoạt động rất nhẹ nhàng, không ảnh hưởng đến hiệu năng điện thoại.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-gray-900 mb-2">
                Dữ liệu của tôi có được bảo mật không?
              </h3>
              <p className="text-gray-600">
                Tuyệt đối. Chúng tôi mã hóa tất cả dữ liệu và không bao giờ chia sẻ thông tin cá nhân của bạn với bên thứ ba.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white mb-6">
            Sẵn sàng bảo vệ bản thân?
          </h2>
          <p className="text-blue-100 mb-8">
            Tải Eldershield ngay bây giờ và bắt đầu trải nghiệm sự an tâm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="opacity-70">Tải về từ</div>
                <div>App Store</div>
              </div>
            </button>

            <button className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="opacity-70">Tải về từ</div>
                <div>Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
