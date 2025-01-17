FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "email#{n}@test.com" }
    password { 'test_password' }
  end
end
