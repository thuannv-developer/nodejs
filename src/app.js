const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// init middlewares
// Morgan dùng để detect các request, có 5 loại
app.use(morgan("dev")) // đầu ra ngắn gọn, trạng thái code dc rô màu. Dùng cho DEV
// app.use(morgan("combined")) // đi theo tiêu chuẩn apache. Dùng cho Production
// app.use(morgan("common")) // cũng là tiêu chuẩn Apache, nhưng không đầy đủ
// app.use(morgan("short")) // ngắn, chỉ bao gồm thời gian phản hồi
// app.use(morgan("tiny")) // siêu ngắn

// Helmet dùng để bảo vệ thông tin riêng tư, ngăn chặn bên thứ 3 truy cập
app.use(helmet())

// Compression dùng để nén data trả về, để đỡ tốn băng thông, giảm tải server
app.use(compression())


// init db


// init routes
app.get('/', (req, res, next) => {
    const strCompress = "Hello Facitipjs"

    return res.status(200).json({
        message: 'Welcome!',
        metadata: strCompress.repeat(100000)
    })
})


// handling error


module.exports = app