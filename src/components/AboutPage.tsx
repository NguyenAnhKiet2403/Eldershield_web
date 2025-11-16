import {
  Shield,
  Target,
  Heart,
  Users,
  Award,
  TrendingUp,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Bảo vệ người dùng',
      description:
        'Sứ mệnh của chúng tôi là bảo vệ mọi người khỏi các cuộc gọi và tin nhắn lừa đảo ngày càng tinh vi.',
    },
    {
      icon: Heart,
      title: 'Công nghệ vì con người',
      description:
        'Chúng tôi tin vào việc sử dụng công nghệ AI tiên tiến để phục vụ và bảo vệ cộng đồng.',
    },
    {
      icon: Target,
      title: 'Chính xác và nhanh chóng',
      description:
        'Phát triển hệ thống phát hiện lừa đảo với độ chính xác cao và phản ứng thời gian thực.',
    },
    {
      icon: Users,
      title: 'Cộng đồng đoàn kết',
      description:
        'Xây dựng mạng lưới người dùng cùng nhau chia sẻ và báo cáo các số lừa đảo mới.',
    },
  ];

  const stats = [
    {
      icon: Award,
      value: '99%',
      label: 'Độ chính xác nhận diện',
    },
  ];

  const team = [
    {
      name: 'Nguyễn Văn Minh',
      role: 'CEO & Founder',
      description: 'Chuyên gia về AI và Machine Learning với 15 năm kinh nghiệm',
      image: 'https://images.unsplash.com/photo-1762330916828-4d3709ee9adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2VjdXJpdHklMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2MzI2MzIyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Trần Thị Hương',
      role: 'CTO',
      description: 'Chuyên gia bảo mật và phát triển hệ thống quy mô lớn',
      image: 'https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc2MzI2MzIyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Lê Hoàng Nam',
      role: 'Head of AI Research',
      description: 'Tiến sĩ về nhận dạng giọng nói và xử lý ngôn ngữ tự nhiên',
      image: 'https://images.unsplash.com/photo-1724600821056-8088d8140373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzYWZldHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzI2MzIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Phạm Minh Tuấn',
      role: 'Head of Product',
      description: 'Chuyên gia về trải nghiệm người dùng và phát triển sản phẩm',
      image: 'https://images.unsplash.com/photo-1762330916828-4d3709ee9adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2VjdXJpdHklMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2MzI2MzIyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Thành lập',
      description:
        'Eldershield được thành lập với mục tiêu bảo vệ người dùng Việt Nam khỏi lừa đảo qua điện thoại.',
    },
    {
      year: '2026',
      title: 'Ra mắt ứng dụng',
      description:
        'Phát hành ứng dụng với tính năng nhận diện số blacklist, QR blacklist và AI cơ bản.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-gray-900 mb-6">
                Về Eldershield
              </h1>
              <p className="text-gray-600 mb-6">
                Eldershield ra đời từ mong muốn bảo vệ cộng đồng Việt Nam khỏi tình trạng lừa đảo qua điện thoại ngày càng gia tăng. Chúng tôi kết hợp công nghệ AI tiên tiến với cơ sở dữ liệu cập nhật liên tục để mang đến giải pháp bảo vệ toàn diện cho mọi người.
              </p>
              <p className="text-gray-600">
                Với đội ngũ chuyên gia công nghệ và bảo mật hàng đầu, chúng tôi không ngừng phát triển và cải tiến ứng dụng để luôn đi trước một bước so với các thủ đoạn lừa đảo mới nhất.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc2MzI2MzIyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Eldershield"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4">Sứ mệnh</h2>
              <p className="text-gray-600">
                Bảo vệ mọi người dân Việt Nam khỏi các hình thức lừa đảo qua điện thoại bằng công nghệ AI tiên tiến và cộng đồng đoàn kết. Chúng tôi cam kết xây dựng một môi trường số an toàn cho tất cả mọi người.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-gray-900 mb-4">Tầm nhìn</h2>
              <p className="text-gray-600">
                Trở thành giải pháp bảo vệ số 1 tại Việt Nam và khu vực, nơi mọi người có thể yên tâm sử dụng điện thoại mà không lo lắng về lừa đảo. Chúng tôi hướng tới tương lai không còn ai phải chịu thiệt hại từ lừa đảo điện thoại.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Thành tựu của chúng tôi</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Những con số minh chứng cho sự tin tưởng và hiệu quả của Eldershield
            </p>
          </div>

          <div className="flex justify-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white mb-2">{stat.value}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Hành trình phát triển</h2>
            <p className="text-gray-600">
              Từ những ngày đầu khởi nghiệp đến hiện tại
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-8">
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Đội ngũ lãnh đạo</h2>
            <p className="text-gray-600">
              Những người dẫn dắt Eldershield tiến về phía trước
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">
            Tham gia cùng chúng tôi
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy trở thành một phần của cộng đồng Eldershield và cùng nhau xây dựng một môi trường số an toàn cho tất cả mọi người.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/download"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Tải ứng dụng
            </a>
            <a
              href="mailto:contact@eldershield.vn"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Liên hệ với chúng tôi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
