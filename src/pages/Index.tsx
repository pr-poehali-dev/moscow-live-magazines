import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-gold text-sm font-bold">LG</span>
              </div>
              <h1 className="text-xl font-montserrat font-bold text-black">
                LOW GEAR
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-black hover:text-gold transition-colors font-open"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-black hover:text-gold transition-colors font-open"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-black hover:text-gold transition-colors font-open"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-black hover:text-gold transition-colors font-open"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-gold hover:bg-gold-dark text-black font-montserrat font-medium">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/img/ff3b083a-be8d-4b56-8c23-3f563aed7cce.jpg)",
          }}
        ></div>
        <div className="relative z-20 text-center px-6 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold text-white mb-6 leading-tight">
            LOW GEAR
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 font-open max-w-2xl mx-auto mb-8">
            Премиальный автомобильный медиа-проект
          </p>
          <Button className="bg-gold hover:bg-gold-dark text-black font-montserrat font-medium px-8 py-6 text-lg">
            Изучить материалы
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-montserrat font-bold text-black mb-4">
              Услуги
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-open max-w-2xl mx-auto">
              Создаем уникальный контент для автомобильной индустрии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="PenTool" className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-black mb-4">
                Контент
              </h3>
              <p className="text-gray-600 font-open leading-relaxed">
                Создание эксклюзивных материалов о автомобилях, обзоры и
                аналитика
              </p>
            </Card>
            <Card className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Camera" className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-black mb-4">
                Фотография
              </h3>
              <p className="text-gray-600 font-open leading-relaxed">
                Профессиональная автомобильная фотосъемка и видеопроизводство
              </p>
            </Card>
            <Card className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Zap" className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-black mb-4">
                Консалтинг
              </h3>
              <p className="text-gray-600 font-open leading-relaxed">
                Экспертные консультации и стратегии для автомобильных брендов
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-montserrat font-bold text-black mb-4">
              Портфолио
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-open max-w-2xl mx-auto">
              Избранные работы и проекты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src="/img/fef4a932-1ac2-413b-9e31-299b947faee1.jpg"
                  alt="Проект 1"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-gold hover:bg-gold-dark text-black font-montserrat">
                    Подробнее
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-black mb-2">
                  Luxury Review
                </h3>
                <p className="text-gray-600 font-open text-sm">
                  Обзор премиального автомобиля
                </p>
              </div>
            </Card>
            <Card className="group overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src="/img/88c1720a-2a1a-4c00-95e9-8293c32476fb.jpg"
                  alt="Проект 2"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-gold hover:bg-gold-dark text-black font-montserrat">
                    Подробнее
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-black mb-2">
                  Studio Session
                </h3>
                <p className="text-gray-600 font-open text-sm">
                  Профессиональная фотосессия
                </p>
              </div>
            </Card>
            <Card className="group overflow-hidden bg-white border-none shadow-lg hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img
                  src="/img/ff3b083a-be8d-4b56-8c23-3f563aed7cce.jpg"
                  alt="Проект 3"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-gold hover:bg-gold-dark text-black font-montserrat">
                    Подробнее
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-black mb-2">
                  Brand Campaign
                </h3>
                <p className="text-gray-600 font-open text-sm">
                  Рекламная кампания для бренда
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
              Контакты
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 font-open max-w-2xl mx-auto">
              Готовы создать что-то выдающееся вместе?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Email
                  </h3>
                  <p className="text-gray-300 font-open">hello@lowgear.media</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Телефон
                  </h3>
                  <p className="text-gray-300 font-open">+7 (xxx) xxx-xx-xx</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white">
                    Адрес
                  </h3>
                  <p className="text-gray-300 font-open">Москва, Россия</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Написать нам
              </h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Имя"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-gold hover:bg-gold-dark text-black font-montserrat font-medium py-3">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">LG</span>
              </div>
              <span className="text-white font-montserrat font-bold">
                LOW GEAR
              </span>
            </div>
            <p className="text-gray-400 font-open text-sm">
              © 2024 Low Gear Media. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
