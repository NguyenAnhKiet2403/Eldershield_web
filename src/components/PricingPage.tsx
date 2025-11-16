import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PricingPage() {
  const plans = [
    {
      name: 'Gói Miễn Phí',
      price: '0đ',
      period: '/tháng',
      description: 'Bảo vệ cơ bản cho người dùng cá nhân',
      features: [
        { name: 'Nhận diện số gọi từ blacklist', included: true },
        { name: 'Nhận diện tin nhắn gửi đến từ blacklist', included: true },
        { name: 'Nhận diện QR có trong blacklist', included: true },
        { name: 'AI phân tích cuộc gọi thời gian thực', included: false },
        { name: 'Cảnh báo cho người thân', included: false },
        { name: 'Gửi định vị khi có dấu hiệu mất tích', included: false },
      ],
      popular: false,
      buttonText: 'Bắt đầu miễn phí',
    },
    {
      name: 'Gói Premium',
      price: '99.000đ',
      period: '/tháng',
      description: 'Bảo vệ toàn diện với AI và cảnh báo người thân',
      features: [
        { name: 'Nhận diện số gọi từ blacklist', included: true },
        { name: 'Nhận diện tin nhắn gửi đến từ blacklist', included: true },
        { name: 'Nhận diện QR có trong blacklist', included: true },
        { name: 'AI phân tích cuộc gọi thời gian thực', included: true },
        { name: 'Cảnh báo cho người thân', included: true },
        { name: 'Gửi định vị khi có dấu hiệu mất tích', included: true },
      ],
      popular: true,
      buttonText: 'Nâng cấp Premium',
    },
  ];

  const comparisonFeatures = [
    {
      category: 'Tính năng cơ bản',
      features: [
        { name: 'Nhận diện số gọi từ blacklist', free: true, premium: true },
        { name: 'Nhận diện tin nhắn từ blacklist', free: true, premium: true },
        { name: 'Quét QR code kiểm tra blacklist', free: true, premium: true },
        { name: 'Cơ sở dữ liệu cập nhật hàng ngày', free: true, premium: true },
        { name: 'Báo cáo số lừa đảo mới', free: true, premium: true },
      ],
    },
    {
      category: 'Tính năng nâng cao',
      features: [
        {
          name: 'AI phân tích cuộc gọi thời gian thực',
          free: false,
          premium: true,
        },
        {
          name: 'Chuyển đổi giọng nói thành văn bản',
          free: false,
          premium: true,
        },
        {
          name: 'Phân tích ngữ cảnh cuộc trò chuyện',
          free: false,
          premium: true,
        },
        { name: 'Cảnh báo trong cuộc gọi', free: false, premium: true },
      ],
    },
    {
      category: 'Bảo vệ gia đình',
      features: [
        { name: 'Gửi cảnh báo cho người thân', free: false, premium: true },
        { name: 'Thiết lập liên hệ khẩn cấp', free: false, premium: true },
        {
          name: 'Gửi định vị khi có dấu hiệu mất tích',
          free: false,
          premium: true,
        },
        { name: 'Thông báo hoạt động đáng ngờ', free: false, premium: true },
      ],
    },
    {
      category: 'Hỗ trợ',
      features: [
        { name: 'Hỗ trợ qua email', free: true, premium: true },
        { name: 'Hỗ trợ ưu tiên 24/7', free: false, premium: true },
        { name: 'Tư vấn cá nhân hóa', free: false, premium: true },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-4">Chọn gói phù hợp với bạn</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bắt đầu với gói miễn phí hoặc nâng cấp lên Premium để có được sự bảo vệ toàn diện với AI và tính năng cảnh báo người thân.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-blue-600 shadow-xl'
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full">
                      Phổ biến nhất
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 mb-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span
                        className={
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/download"
                  className={`block w-full py-3 rounded-lg text-center transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">So sánh chi tiết các gói</h2>
            <p className="text-gray-600">
              Xem chi tiết tất cả tính năng của từng gói dịch vụ
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-200 bg-gray-50">
              <div></div>
              <div className="text-center">
                <div className="text-gray-900">Miễn phí</div>
              </div>
              <div className="text-center">
                <div className="text-gray-900">Premium</div>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonFeatures.map((category, categoryIdx) => (
              <div key={categoryIdx}>
                <div className="px-6 py-4 bg-gray-50">
                  <h3 className="text-gray-900">{category.category}</h3>
                </div>
                {category.features.map((feature, featureIdx) => (
                  <div
                    key={featureIdx}
                    className="grid grid-cols-3 gap-4 p-6 border-t border-gray-100"
                  >
                    <div className="text-gray-700">{feature.name}</div>
                    <div className="flex justify-center">
                      {feature.free ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Câu hỏi thường gặp</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-gray-900 mb-2">
                Tôi có thể nâng cấp từ gói miễn phí lên Premium bất cứ lúc nào không?
              </h3>
              <p className="text-gray-600">
                Có, bạn có thể nâng cấp lên gói Premium bất cứ lúc nào. Các tính năng Premium sẽ được kích hoạt ngay lập tức sau khi thanh toán.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-gray-900 mb-2">
                Gói Premium có cam kết thời gian sử dụng tối thiểu không?
              </h3>
              <p className="text-gray-600">
                Không, bạn có thể hủy gói Premium bất cứ lúc nào. Không có ràng buộc hợp đồng hay phí hủy.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-gray-900 mb-2">
                Tôi có thể chia sẻ gói Premium cho gia đình không?
              </h3>
              <p className="text-gray-600">
                Hiện tại mỗi gói Premium chỉ áp dụng cho 1 thiết bị. Chúng tôi đang phát triển gói gia đình để nhiều thành viên có thể sử dụng cùng lúc.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-gray-900 mb-2">
                Dữ liệu cá nhân của tôi có được bảo mật không?
              </h3>
              <p className="text-gray-600">
                Tuyệt đối. Mọi dữ liệu được mã hóa và chúng tôi không bao giờ chia sẻ thông tin cá nhân của bạn với bên thứ ba.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Sẵn sàng bảo vệ bản thân?
          </h2>
          <p className="text-blue-100 mb-8">
            Tải Eldershield ngay hôm nay và bắt đầu với gói miễn phí
          </p>
          <Link
            to="/download"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Tải xuống miễn phí
          </Link>
        </div>
      </section>
    </div>
  );
}
