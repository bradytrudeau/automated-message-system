import React, { useState } from 'react';
import axios from 'axios';

function MessageForm() {
  const PORT = 5050;
  const [messages, setMessages] = useState([]);
  const [guests, setGuests] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [guestId, setGuestId] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [finalMessage, setFinalMessage] = useState('');

  React.useEffect(() => {
    fetchValues();
  }, []);

  const fetchValues = async () => {
    try {
      const response = await axios.get(`http://localhost:${PORT}/api/select-values`);
      setMessages([...response.data.messageTemplates]);
      setGuests([...response.data.guests]);
      setCompanies([...response.data.companies]);
      setGuestId(response.data.guests[0].id);
      setCompanyId(response.data.companies[0].id);
      setTemplateId(response.data.messageTemplates[0].id);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleGuestChange = (e) => {
    setGuestId(parseInt(e.target.value));
  };

  const handleCompanyChange = (e) => {
    setCompanyId(parseInt(e.target.value));
  };

  const handleTemplateChange = (e) => {
    setTemplateId(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:${PORT}/api/process-message`, {
        guestId,
        companyId,
        templateId,
      });
      setFinalMessage(response.data);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const startOver = (e) => {
    setFinalMessage(null);
  };

  return (
    <div className="App-form">
      {finalMessage ? (
        <div>
          <div className="App-message">{finalMessage}</div>
          <button className="button" onClick={startOver}>
            Try Again!
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="App-input-group">
            <div className="App-input">
              <label htmlFor="guestId" className="App-label">
                Guest ID:
              </label>
              <select id="guestId" name="guestId" value={guestId} onChange={handleGuestChange}>
                {guests.map((guest) => (
                  <option key={guest.id} value={guest.id}>
                    {guest.firstName} {guest.lastName}
                  </option>
                ))}
              </select>
            </div>
            <div className="App-input">
              <label htmlFor="companyId" className="App-label">
                Company ID:
              </label>
              <select id="companyId" name="companyId" value={companyId} onChange={handleCompanyChange}>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.company}
                  </option>
                ))}
              </select>
            </div>
            <div className="App-input">
              <label htmlFor="templateId" className="App-label">
                Template ID:
              </label>
              <select id="templateId" name="templateId" value={templateId} onChange={handleTemplateChange}>
                {messages.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export { MessageForm };
