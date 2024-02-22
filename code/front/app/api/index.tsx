import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const baseUrl = "http://localhost:8080"

    if (req.method === 'GET') {
        const { first, secound } = req.query;
        // GET 요청에 대한 처리
        const apiUrl = `${baseUrl}/contents/${first}/${secound}`
        try {
            // 데이터를 가져오는 비동기 작업 수행
            const data = await getDataFromDatabase(apiUrl);
            // 데이터를 클라이언트로 응답
            res.status(200).json(data);
        } catch (error) {
            // 오류가 발생한 경우 클라이언트에 오류 응답
            res.status(500).json({ message: 'Internal server error' });
        }
        } else if (req.method === 'POST') {
        // POST 요청에 대한 처리
        try {
        // 클라이언트로부터 전송된 데이터를 파싱
        const { username, email } = req.body;

        // 데이터베이스에 새로운 사용자 추가
        await addUserToDatabase(username, email);

        // 사용자 추가가 성공한 경우 응답
        res.status(201).json({ message: 'User added successfully' });
        } catch (error) {
        // 오류가 발생한 경우 클라이언트에 오류 응답
        res.status(500).json({ message: 'Internal server error' });
        }
    } else {
      // GET 또는 POST 요청 외의 요청에 대한 처리
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  
// 데이터베이스로부터 데이터를 가져오는 비동기 함수
async function getDataFromDatabase(apiUrl: string) {
    try {
        const response = await fetch(apiUrl); // API에서 데이터를 가져옴
        if (!response.ok) {
            const responseCode = `Failed to fetch data: ${response.status} ${response.statusText}`;
            const responseData = await response.json();
            const errorMessage = `${responseCode}\n${responseData}`
            throw new Error(errorMessage);
        }
        const data = await response.json(); // JSON 형식으로 변환
        console.log(data); // 데이터 확인용
        return data; // 데이터 반환
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // 오류가 발생하면 호출자에게 예외를 던짐
    }
}

async function addUserToDatabase(username: string, email: string) {
    // 여기서는 가짜 데이터베이스 작업을 수행하는 것으로 가정
}