# Giai đoạn Build
FROM maven:3.9.6-eclipse-temurin-17 AS builder
WORKDIR /app
COPY . .
RUN mvn package -DskipTests

# Giai đoạn Chạy (Runtime)
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app

# Copy file jar từ giai đoạn builder
COPY --from=builder /app/target/*.jar app.jar

# Tạo thư mục để lưu trữ ảnh upload bên trong container
RUN mkdir -p /app/uploads

# Khai báo Volume để dữ liệu ảnh upload không bị mất khi container khởi động lại
VOLUME /app/uploads

# Cấu hình mặc định (có thể ghi đè khi chạy docker run -e ...)
ENV SPRING_DATASOURCE_URL=jdbc:mysql://host.docker.internal:3306/profile?useSSL=false&serverTimezone=UTC
ENV UPLOAD_PATH=/app/uploads/

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
