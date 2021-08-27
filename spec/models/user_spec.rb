require 'rails_helper'

RSpec.describe User do
  describe 'relationships' do
    it {should have_many(:friends)}
    it {should have_many(:followers).through(:friends)}

    it {should have_many(:follows)}
    it {should have_many(:followed).through(:follows)}
  end
  describe "validations" do
    it {should validate_presence_of(:email)}
    it {should validate_uniqueness_of(:email)}
    it {should validate_presence_of(:password)}
  end

  describe 'class methods' do

  end
  describe 'instance methods' do
    
  end
end