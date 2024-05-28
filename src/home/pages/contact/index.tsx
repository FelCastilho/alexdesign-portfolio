import { useState } from 'react';
import './style.css';
import emailjs from '@emailjs/browser';
import { db } from '../../../services/firebaseConfig';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const q = query(collection(db, "content"), where("date", "==", date), where("time", "==", time));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                alert('Este horário já está reservado. Por favor, escolha outro horário.');
                return;
            }
            await addDoc(collection(db, "content"), {
                name,
                email,
                message,
                date,
                time
            });

            // Envia o email
            const templateParams = {
                from_name: name,
                message: message,
                date: date,
                time: time,
                email: email
            };

            await emailjs.send("service_qxk5dlm", "template_jyltjnk", templateParams, "D0vBVk6iZpPUUMkzM");
            alert('Mensagem enviada com sucesso!');

            // Limpa os campos do formulário
            setName('');
            setEmail('');
            setMessage('');
            setDate('');
            setTime('');
        } catch (err) {
            console.log(err);
            alert('Erro ao enviar a mensagem. Tente novamente.');
        }
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(e.target.value);
        const day = selectedDate.getUTCDay(); 

        if (day === 0) {
            alert('Domingo não é permitido. Por favor, escolha um dia útil.');
            setDate('');
        } else {
            setDate(e.target.value);
        }
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTime(e.target.value);
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 7; hour < 22; hour++) {
            const timeString = `${String(hour).padStart(2, '0')}:00`;
            options.push(timeString);
        }
        return options;
    };

    const timeOptions = generateTimeOptions();

    return (
        <section className="contact" id='contato'>
            <div className="container-contact">
                <div className="text-contact">
                    <div className="contact-title">
                        <h1>Vamos marcar <br /> nossa conversa</h1>
                        <hr />
                    </div>
                    <p>
                        Preencha o formulário ao lado para <br />
                        que possamos agendar um horário <br />
                        e falarmos sobre o seu projeto.
                    </p>
                </div>

                <form className="form-contact" onSubmit={onSubmit}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        className="input"
                        type="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <div className="container-hour">
                        <input
                            className="input"
                            type="date"
                            onChange={handleDateChange}
                            value={date}
                        />
                        <select
                            className="input"
                            onChange={handleTimeChange}
                            value={time}
                            disabled={!date}
                        >
                            <option value="">Escolha um horário</option>
                            {timeOptions.map((timeOption, index) => (
                                <option key={index} value={timeOption}>{timeOption}</option>
                            ))}
                        </select>
                    </div>

                    <textarea
                        className="textarea"
                        placeholder="Me conte de forma resumida sobre seu projeto"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </section>
    );
}
