- <b>SPA</b> - Single-Page Application
  - ReactJS là một trong những thư viện tạo ta SPA
  - Được cho là cách tiếp cận hiện đại hơn
  - Không yêu cầu tải lại trang trong quá trình sử dụng
  - Nhanh hơn khi sử dụng
  - Phần lớn tài nguyên được tải trong lần đầu
  - Chỉ tải thêm dữ liệu mới khi cần
  - Có phần front-end riêng biệt
  - SEO: Không thân thiện với SEO như MPA
  - UX: Cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
  - Trải nghiệm trên thiết bị di động tốt hơn
  - Dễ dàng tái sử dụng code (component)
  - Bóc tách FE, BE, phát triển trong song, phát triển thêm mobile app dễ dàng
  - Phụ thuộc hoàn toàn vào JS
  - Giảm tải cho server
  - CSR - Client side rendering

- <b>MPA</b> - Multi-Page Application
  - Là cách tiếp cận cổ điển hơn
  - Tải lại trang trong quá trình sử dụng (click vào đường link, chuyển sang...)
  - Chậm hơn khi sử dụng
  - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng
  - Front-end và back-end phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án
  - Có thể không cần JS
  - Mọi request đều đẩy lên server
  - SSR - Server side rendering
- <b>document.createElement()</b> -> Node element
  - Object.assign(element.style, {
      color: 'blue,
      backgroundColor: '#333'
    })
  - document.appendChild()
- <b>React.createElement()</b> -> React element
  - React.createElement(type, props, children)
- <b>React-DOM</b>
  - ReactDOM.render(element, container, callback)
  - Render React elemnt -> DOM element -> UI
  - React-Native -> iOS, Android 