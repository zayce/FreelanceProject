import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSpring, animated } from "react-spring";
import "./Home.css";
import BackgroundVideo from "./Back";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Giveds">
      <BackgroundVideo />
      <div className="Givka">
        <button className="Gived" onClick={handleButtonClick}>
          Дарим 1500 рублей за прохождение бесплатного курса «как стать
          блогером»!
        </button>
      </div>

      {showModal && (
        <RegistrationModal
          onClose={handleCloseModal}
          setShowNotification={setShowNotification}
        />
      )}

      {showNotification && (
        <Notification onClose={() => setShowNotification(false)} />
      )}
    </div>
  );
};

const RegistrationModal = ({ onClose, setShowNotification }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Вывод данных в консоль
    setShowNotification(true); // Показать уведомление
    onClose(); // Закрыть модальное окно
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          <div className="form-group">
            <label>Имя пользователя</label>
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="Введите ваше имя"
            />
            {errors.username && <span className="error">Имя обязательно</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Введите ваш email"
            />
            {errors.email && <span className="error">Email обязателен</span>}
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Введите ваш пароль"
            />
            {errors.password && (
              <span className="error">
                Пароль должен быть не менее 6 символов
              </span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

const Notification = ({ onClose }) => {
  const fade = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 210, friction: 20 },
    onRest: () => setTimeout(onClose, 3000), // Закрыть уведомление через 3 секунды
  });

  return (
    <animated.div className="notification" style={fade}>
      <p>Регистрация прошла успешно!</p>
      <button className="close-notification" onClick={onClose}>
        Закрыть
      </button>
    </animated.div>
  );
};
