import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function SafetyTipsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      title: '10 Dấu hiệu nhận biết cuộc gọi lừa đảo',
      excerpt:
        'Tìm hiểu các dấu hiệu phổ biến của cuộc gọi lừa đảo để bảo vệ bản thân. Từ giọng nói hối thúc đến yêu cầu chuyển tiền khẩn cấp, đây là những tín hiệu cảnh báo bạn không nên bỏ qua.',
      date: '15 Tháng 11, 2024',
      author: 'Nguyễn Văn An',
      category: 'Cảnh giác lừa đảo',
      image: 'https://images.unsplash.com/photo-1728047699149-82f1fd4ac9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhbGwlMjB3YXJuaW5nJTIwYWxlcnR8ZW58MXx8fHwxNzYzMjYzMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 phút đọc',
    },
    {
      title: 'Cách bảo vệ người già khỏi lừa đảo qua điện thoại',
      excerpt:
        'Người cao tuổi thường là mục tiêu dễ dàng của kẻ lừa đảo. Hướng dẫn chi tiết cách giúp cha mẹ, ông bà nhận biết và phòng tránh các thủ đoạn lừa đảo phổ biến qua điện thoại.',
      date: '12 Tháng 11, 2024',
      author: 'Trần Thị Bình',
      category: 'Bảo vệ gia đình',
      image: 'https://images.unsplash.com/photo-1724600821056-8088d8140373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzYWZldHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzI2MzIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 phút đọc',
    },
    {
      title: 'Các loại tin nhắn lừa đảo phổ biến tại Việt Nam',
      excerpt:
        'Phân tích các dạng tin nhắn lừa đảo đang thịnh hành như giả mạo ngân hàng, cơ quan thuế, và các công ty vận chuyển. Học cách nhận biết và xử lý an toàn.',
      date: '8 Tháng 11, 2024',
      author: 'Lê Minh Hải',
      category: 'Tin nhắn lừa đảo',
      image: 'https://images.unsplash.com/photo-1762330916828-4d3709ee9adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2VjdXJpdHklMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2MzI2MzIyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 phút đọc',
    },
    {
      title: 'QR Code lừa đảo: Những điều cần biết',
      excerpt:
        'Mã QR ngày càng phổ biến nhưng cũng trở thành công cụ của kẻ lừa đảo. Tìm hiểu cách kiểm tra QR code an toàn trước khi quét và những dấu hiệu cảnh báo.',
      date: '5 Tháng 11, 2024',
      author: 'Phạm Thu Hương',
      category: 'An toàn công nghệ',
      image: 'https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc2MzI2MzIyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 phút đọc',
    },
    {
      title: 'Giả mạo cơ quan chức năng: Thủ đoạn và cách phòng tránh',
      excerpt:
        'Kẻ lừa đảo thường giả danh công an, tòa án, hoặc cơ quan thuế để đe dọa và lừa tiền. Hiểu rõ quy trình làm việc thực tế của các cơ quan để không bị lừa.',
      date: '1 Tháng 11, 2024',
      author: 'Hoàng Văn Công',
      category: 'Cảnh giác lừa đảo',
      image: 'https://images.unsplash.com/photo-1728047699149-82f1fd4ac9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhbGwlMjB3YXJuaW5nJTIwYWxlcnR8ZW58MXx8fHwxNzYzMjYzMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 phút đọc',
    },
    {
      title: 'Lừa đảo qua link giả mạo: Nhận biết và phòng tránh',
      excerpt:
        'Các link lừa đảo ngày càng tinh vi và khó phân biệt. Hướng dẫn cách kiểm tra link an toàn, nhận biết tên miền giả mạo và bảo vệ thông tin cá nhân.',
      date: '28 Tháng 10, 2024',
      author: 'Nguyễn Thị Mai',
      category: 'An toàn công nghệ',
      image: 'https://images.unsplash.com/photo-1762330916828-4d3709ee9adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwc2VjdXJpdHklMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc2MzI2MzIyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 phút đọc',
    },
  ];

  const categories = [
    'Tất cả',
    'Cảnh giác lừa đảo',
    'Bảo vệ gia đình',
    'Tin nhắn lừa đảo',
    'An toàn công nghệ',
  ];

  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'Tất cả' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-900 mb-4">
            Tips cảnh giác chống lừa đảo
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Nâng cao nhận thức và kỹ năng phòng chống lừa đảo qua các bài viết hướng dẫn chi tiết từ chuyên gia.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-64 lg:h-full">
                  <ImageWithFallback
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full mb-4 self-start">
                    Bài viết nổi bật
                  </div>
                  <h2 className="text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    Đọc thêm
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-gray-500 mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      Đọc bài viết
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Không tìm thấy bài viết nào phù hợp với tìm kiếm của bạn.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Tips nhanh phòng chống lừa đảo</h2>
            <p className="text-gray-600">
              Những lời khuyên ngắn gọn giúp bạn tránh xa lừa đảo mỗi ngày
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-gray-900 mb-2">
                Không tin cuộc gọi hối thúc
              </h3>
              <p className="text-gray-600">
                Cơ quan chức năng không bao giờ yêu cầu chuyển tiền khẩn cấp qua điện thoại.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-gray-900 mb-2">
                Kiểm tra kỹ link trước khi nhấp
              </h3>
              <p className="text-gray-600">
                Kiểm tra tên miền cẩn thận, lừa đảo thường dùng tên miền tương tự.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-gray-900 mb-2">
                Không chia sẻ mã OTP
              </h3>
              <p className="text-gray-600">
                Mã OTP chỉ dùng cho bạn, không bao giờ cung cấp cho người khác.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="text-gray-900 mb-2">
                Xác minh qua kênh chính thức
              </h3>
              <p className="text-gray-600">
                Gọi lại số hotline chính thức để xác minh thông tin đáng ngờ.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                5
              </div>
              <h3 className="text-gray-900 mb-2">
                Cảnh giác với giải thưởng bất ngờ
              </h3>
              <p className="text-gray-600">
                Nếu bạn không tham gia, không thể trúng thưởng. Đừng tin lời hứa hão.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                6
              </div>
              <h3 className="text-gray-900 mb-2">
                Trao đổi với gia đình
              </h3>
              <p className="text-gray-600">
                Chia sẻ với người thân khi nhận được tin nhắn hoặc cuộc gọi đáng ngờ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
