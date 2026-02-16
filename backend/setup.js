import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const setup = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
  await connection.query(`USE \`${process.env.DB_NAME}\`;`);

  // Create users table with admin role
  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      is_admin TINYINT(1) DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Add is_admin column if it doesn't exist (for existing databases)
  try {
    await connection.query('ALTER TABLE users ADD COLUMN is_admin TINYINT(1) DEFAULT 0');
  } catch (e) {
    // Column already exists, ignore error
  }

  // Create messages table for contact form
  await connection.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Check if admin user exists, if not create default admin
  const [adminExists] = await connection.query('SELECT * FROM users WHERE email = ?', ['sansar@gmail.com']);
  
  if (adminExists.length === 0) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('josepha', salt);
    
    await connection.query(
      'INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)',
      ['Admin', 'sansar@gmail.com', hashedPassword, 1]
    );
    console.log('Default admin user created: sansar@gmail.com / josepha');
  }

  console.log('Database, users table (with admin role), and messages table created successfully.');
  await connection.end();
};

setup().catch(err => {
  console.error('Error setting up database:', err);
  process.exit(1);
});
