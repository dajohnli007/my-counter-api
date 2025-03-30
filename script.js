async function validate() {
    const card = document.getElementById('card').value;
    const pwd = document.getElementById('pwd').value;
    
    // 触发GitHub Action更新计数
    const response = await fetch(
        `https://api.github.com/repos/[你的用户名]/my-counter-db/dispatches`,
        {
            method: 'POST',
            headers: {
                'Authorization': 'token [你的GitHub Token]',
                'Accept': 'application/vnd.github.everest-preview+json'
            },
            body: JSON.stringify({
                event_type: 'update_count',
                client_payload: { card, pwd }
            })
        }
    );

    if(response.status === 204) {
        document.getElementById('result').innerHTML = "验证请求已提交，请稍后刷新查看结果";
    }
}
