import 'dotenv/config';
import app from './app.js';
import logger from './utils/logger.js';

const { PORT } = process.env;
const { HOST } = process.env;

app.listen(PORT, (error) => {
  if (error) {
    logger.error(`Ошибка запуска сервера: ${error.message}`);
    return;
  }
  logger.info(`Сервер запущен на: http://${HOST}:${PORT}`);
});
