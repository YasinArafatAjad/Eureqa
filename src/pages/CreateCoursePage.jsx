import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Upload, 
  Image as ImageIcon, 
  Save, 
  Eye, 
  Plus, 
  Trash2,
  Clock,
  Users,
  DollarSign,
  BookOpen,
  Video,
  FileText,
  Target,
  Award
} from 'lucide-react';
import { useThemeContext } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { uploadToCloudinary } from '../config/cloudinary';
import SEOHelmet from '../components/SEOHelmet';

const CreateCoursePage = () => {
  const { darkMode } = useThemeContext();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [courseData, setCourseData] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: '',
    level: 'beginner',
    language: 'bengali',
    price: '',
    originalPrice: '',
    duration: '',
    totalLessons: '',
    image: '',
    imageFile: null,
    requirements: [''],
    learningOutcomes: [''],
    curriculum: [{ title: '', lessons: [{ title: '', duration: '' }] }],
    tags: [''],
    status: 'draft'
  });

  const categories = [
    { value: 'programming', label: 'প্রোগ্রামিং' },
    { value: 'web-development', label: 'ওয়েব ডেভেলপমেন্ট' },
    { value: 'mobile-development', label: 'মোবাইল ডেভেলপমেন্ট' },
    { value: 'data-science', label: 'ডেটা সায়েন্স' },
    { value: 'digital-marketing', label: 'ডিজিটাল মার্কেটিং' },
    { value: 'graphic-design', label: 'গ্রাফিক্স ডিজাইন' },
    { value: 'ui-ux-design', label: 'UI/UX ডিজাইন' },
    { value: 'business', label: 'ব্যবসা' },
    { value: 'language', label: 'ভাষা' },
    { value: 'photography', label: 'ফটোগ্রাফি' },
    { value: 'music', label: 'সঙ্গীত' },
    { value: 'other', label: 'অন্যান্য' }
  ];

  const levels = [
    { value: 'beginner', label: 'বিগিনার' },
    { value: 'intermediate', label: 'ইন্টারমিডিয়েট' },
    { value: 'advanced', label: 'অ্যাডভান্সড' },
    { value: 'all-levels', label: 'সব স্তর' }
  ];

  const languages = [
    { value: 'bengali', label: 'বাংলা' },
    { value: 'english', label: 'ইংরেজি' },
    { value: 'hindi', label: 'হিন্দি' }
  ];

  const steps = [
    { id: 1, title: 'মূল তথ্য', icon: BookOpen },
    { id: 2, title: 'কোর্স বিবরণ', icon: FileText },
    { id: 3, title: 'পাঠ্যক্রম', icon: Video },
    { id: 4, title: 'মূল্য ও প্রকাশনা', icon: DollarSign }
  ];

  const handleInputChange = (field, value) => {
    setCourseData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field, defaultValue = '') => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field], defaultValue]
    }));
  };

  const removeArrayItem = (field, index) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleCurriculumChange = (sectionIndex, field, value) => {
    setCourseData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map((section, i) => 
        i === sectionIndex ? { ...section, [field]: value } : section
      )
    }));
  };

  const handleLessonChange = (sectionIndex, lessonIndex, field, value) => {
    setCourseData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map((section, i) => 
        i === sectionIndex ? {
          ...section,
          lessons: section.lessons.map((lesson, j) => 
            j === lessonIndex ? { ...lesson, [field]: value } : lesson
          )
        } : section
      )
    }));
  };

  const addCurriculumSection = () => {
    setCourseData(prev => ({
      ...prev,
      curriculum: [...prev.curriculum, { title: '', lessons: [{ title: '', duration: '' }] }]
    }));
  };

  const removeCurriculumSection = (index) => {
    setCourseData(prev => ({
      ...prev,
      curriculum: prev.curriculum.filter((_, i) => i !== index)
    }));
  };

  const addLesson = (sectionIndex) => {
    setCourseData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map((section, i) => 
        i === sectionIndex ? {
          ...section,
          lessons: [...section.lessons, { title: '', duration: '' }]
        } : section
      )
    }));
  };

  const removeLesson = (sectionIndex, lessonIndex) => {
    setCourseData(prev => ({
      ...prev,
      curriculum: prev.curriculum.map((section, i) => 
        i === sectionIndex ? {
          ...section,
          lessons: section.lessons.filter((_, j) => j !== lessonIndex)
        } : section
      )
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setErrors(prev => ({ ...prev, image: 'শুধুমাত্র ছবি ফাইল আপলোড করুন' }));
      return;
    }

    setImageUploading(true);
    try {
      const imageUrl = await uploadToCloudinary(file, 'courses');
      setCourseData(prev => ({
        ...prev,
        image: imageUrl,
        imageFile: file
      }));
      setErrors(prev => ({ ...prev, image: '' }));
    } catch (error) {
      console.error('Image upload error:', error);
      setErrors(prev => ({ ...prev, image: 'ছবি আপলোড করতে সমস্যা হয়েছে' }));
    } finally {
      setImageUploading(false);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!courseData.title.trim()) newErrors.title = 'কোর্সের নাম আবশ্যক';
        if (!courseData.subtitle.trim()) newErrors.subtitle = 'সাবটাইটেল আবশ্যক';
        if (!courseData.category) newErrors.category = 'ক্যাটেগরি নির্বাচন করুন';
        if (!courseData.image) newErrors.image = 'কোর্সের ছবি আপলোড করুন';
        break;
      case 2:
        if (!courseData.description.trim()) newErrors.description = 'কোর্সের বিবরণ আবশ্যক';
        if (courseData.requirements.every(req => !req.trim())) {
          newErrors.requirements = 'অন্তত একটি প্রয়োজনীয়তা যোগ করুন';
        }
        if (courseData.learningOutcomes.every(outcome => !outcome.trim())) {
          newErrors.learningOutcomes = 'অন্তত একটি শিক্ষার ফলাফল যোগ করুন';
        }
        break;
      case 3:
        if (!courseData.totalLessons || courseData.totalLessons < 1) {
          newErrors.totalLessons = 'মোট লেসন সংখ্যা আবশ্যক';
        }
        if (!courseData.duration.trim()) newErrors.duration = 'কোর্সের সময়কাল আবশ্যক';
        if (courseData.curriculum.every(section => !section.title.trim())) {
          newErrors.curriculum = 'অন্তত একটি সেকশন যোগ করুন';
        }
        break;
      case 4:
        if (!courseData.price || courseData.price < 0) newErrors.price = 'কোর্সের মূল্য আবশ্যক';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (status = 'draft') => {
    if (!validateStep(4)) return;

    setLoading(true);
    try {
      // Calculate total duration from curriculum
      const totalMinutes = courseData.curriculum.reduce((total, section) => {
        return total + section.lessons.reduce((sectionTotal, lesson) => {
          const duration = parseInt(lesson.duration) || 0;
          return sectionTotal + duration;
        }, 0);
      }, 0);

      const courseToSave = {
        ...courseData,
        status,
        instructorId: currentUser.uid,
        instructorName: currentUser.displayName || 'Unknown',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        students: 0,
        rating: 0,
        reviews: 0,
        totalDurationMinutes: totalMinutes,
        // Clean up arrays
        requirements: courseData.requirements.filter(req => req.trim()),
        learningOutcomes: courseData.learningOutcomes.filter(outcome => outcome.trim()),
        tags: courseData.tags.filter(tag => tag.trim()),
        curriculum: courseData.curriculum.filter(section => 
          section.title.trim() && section.lessons.some(lesson => lesson.title.trim())
        ).map(section => ({
          ...section,
          lessons: section.lessons.filter(lesson => lesson.title.trim())
        }))
      };

      // Remove imageFile before saving to Firestore
      delete courseToSave.imageFile;

      const docRef = await addDoc(collection(db, 'courses'), courseToSave);
      
      // Show success message and redirect
      alert(status === 'published' ? 'কোর্স সফলভাবে প্রকাশিত হয়েছে!' : 'কোর্স খসড়া হিসেবে সংরক্ষিত হয়েছে!');
      navigate('/instructor/courses');
    } catch (error) {
      console.error('Error saving course:', error);
      alert('কোর্স সংরক্ষণে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              কোর্সের মূল তথ্য
            </h3>

            {/* Course Title */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                কোর্সের নাম *
              </label>
              <input
                type="text"
                value={courseData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.title ? 'border-red-500' : ''}`}
                placeholder="উদাহরণ: সম্পূর্ণ ওয়েব ডেভেলপমেন্ট কোর্স"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Course Subtitle */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                সাবটাইটেল *
              </label>
              <input
                type="text"
                value={courseData.subtitle}
                onChange={(e) => handleInputChange('subtitle', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.subtitle ? 'border-red-500' : ''}`}
                placeholder="একটি আকর্ষণীয় সাবটাইটেল লিখুন"
              />
              {errors.subtitle && <p className="text-red-500 text-sm mt-1">{errors.subtitle}</p>}
            </div>

            {/* Category and Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  ক্যাটেগরি *
                </label>
                <select
                  value={courseData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.category ? 'border-red-500' : ''}`}
                >
                  <option value="">ক্যাটেগরি নির্বাচন করুন</option>
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  স্তর
                </label>
                <select
                  value={courseData.level}
                  onChange={(e) => handleInputChange('level', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                >
                  {levels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Language */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                ভাষা
              </label>
              <select
                value={courseData.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
              >
                {languages.map(lang => (
                  <option key={lang.value} value={lang.value}>{lang.label}</option>
                ))}
              </select>
            </div>

            {/* Course Image */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                কোর্সের ছবি *
              </label>
              <div className={`border-2 border-dashed ${errors.image ? 'border-red-500' : darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg p-6`}>
                {courseData.image ? (
                  <div className="relative">
                    <img
                      src={courseData.image}
                      alt="Course preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleInputChange('image', '')}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <ImageIcon className={`h-12 w-12 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mx-auto mb-4`} />
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      ছবি আপলোড করতে ক্লিক করুন
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-4`}>
                      PNG, JPG, JPEG
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="course-image"
                      disabled={imageUploading}
                    />
                    <label
                      htmlFor="course-image"
                      className={`inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 cursor-pointer ${imageUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {imageUploading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          আপলোড হচ্ছে...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          ছবি নির্বাচন করুন
                        </>
                      )}
                    </label>
                  </div>
                )}
              </div>
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              কোর্সের বিবরণ
            </h3>

            {/* Course Description */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                কোর্সের বিবরণ *
              </label>
              <textarea
                value={courseData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${errors.description ? 'border-red-500' : ''}`}
                placeholder="কোর্সের বিস্তারিত বিবরণ লিখুন..."
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            {/* Requirements */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                প্রয়োজনীয়তা *
              </label>
              {courseData.requirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={req}
                    onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                    className={`flex-1 px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="প্রয়োজনীয়তা লিখুন"
                  />
                  {courseData.requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('requirements', index)}
                      className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('requirements')}
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <Plus className="h-4 w-4 mr-1" />
                প্রয়োজনীয়তা যোগ করুন
              </button>
              {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
            </div>

            {/* Learning Outcomes */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                শিক্ষার ফলাফল *
              </label>
              {courseData.learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={outcome}
                    onChange={(e) => handleArrayChange('learningOutcomes', index, e.target.value)}
                    className={`flex-1 px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="শিক্ষার্থী কী শিখবে"
                  />
                  {courseData.learningOutcomes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('learningOutcomes', index)}
                      className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('learningOutcomes')}
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <Plus className="h-4 w-4 mr-1" />
                ফলাফল যোগ করুন
              </button>
              {errors.learningOutcomes && <p className="text-red-500 text-sm mt-1">{errors.learningOutcomes}</p>}
            </div>

            {/* Tags */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                ট্যাগ
              </label>
              {courseData.tags.map((tag, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => handleArrayChange('tags', index, e.target.value)}
                    className={`flex-1 px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="ট্যাগ লিখুন"
                  />
                  {courseData.tags.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('tags', index)}
                      className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('tags')}
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <Plus className="h-4 w-4 mr-1" />
                ট্যাগ যোগ করুন
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              পাঠ্যক্রম
            </h3>

            {/* Course Duration and Lessons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  মোট সময়কাল *
                </label>
                <input
                  type="text"
                  value={courseData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.duration ? 'border-red-500' : ''}`}
                  placeholder="উদাহরণ: ৪৮ ঘন্টা"
                />
                {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  মোট লেসন সংখ্যা *
                </label>
                <input
                  type="number"
                  value={courseData.totalLessons}
                  onChange={(e) => handleInputChange('totalLessons', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.totalLessons ? 'border-red-500' : ''}`}
                  placeholder="লেসন সংখ্যা"
                  min="1"
                />
                {errors.totalLessons && <p className="text-red-500 text-sm mt-1">{errors.totalLessons}</p>}
              </div>
            </div>

            {/* Curriculum Sections */}
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                পাঠ্যক্রম সেকশন *
              </label>
              
              {courseData.curriculum.map((section, sectionIndex) => (
                <div key={sectionIndex} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-lg p-4 mb-4`}>
                  <div className="flex items-center justify-between mb-4">
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => handleCurriculumChange(sectionIndex, 'title', e.target.value)}
                      className={`flex-1 px-4 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      placeholder="সেকশনের নাম"
                    />
                    {courseData.curriculum.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeCurriculumSection(sectionIndex)}
                        className="ml-2 p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>

                  {/* Lessons */}
                  <div className="space-y-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={lesson.title}
                          onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'title', e.target.value)}
                          className={`flex-1 px-3 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                          placeholder="লেসনের নাম"
                        />
                        <input
                          type="text"
                          value={lesson.duration}
                          onChange={(e) => handleLessonChange(sectionIndex, lessonIndex, 'duration', e.target.value)}
                          className={`w-24 px-3 py-2 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                          placeholder="মিনিট"
                        />
                        {section.lessons.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeLesson(sectionIndex, lessonIndex)}
                            className="p-2 text-red-500 hover:text-red-700 transition-colors duration-200"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addLesson(sectionIndex)}
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200 text-sm"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      লেসন যোগ করুন
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addCurriculumSection}
                className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <Plus className="h-4 w-4 mr-1" />
                নতুন সেকশন যোগ করুন
              </button>
              {errors.curriculum && <p className="text-red-500 text-sm mt-1">{errors.curriculum}</p>}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              মূল্য ও প্রকাশনা
            </h3>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  কোর্সের মূল্য (৳) *
                </label>
                <input
                  type="number"
                  value={courseData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.price ? 'border-red-500' : ''}`}
                  placeholder="৫৯৯৯"
                  min="0"
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
              </div>

              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  মূল মূল্য (৳)
                </label>
                <input
                  type="number"
                  value={courseData.originalPrice}
                  onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                  placeholder="৮৯৯৯"
                  min="0"
                />
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  ছাড় দেখানোর জন্য (ঐচ্ছিক)
                </p>
              </div>
            </div>

            {/* Course Preview */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border rounded-lg p-6`}>
              <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                কোর্স প্রিভিউ
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {courseData.image && (
                    <img
                      src={courseData.image}
                      alt="Course preview"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h5 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {courseData.title || 'কোর্সের নাম'}
                  </h5>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    {courseData.subtitle || 'সাবটাইটেল'}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {courseData.duration || 'N/A'}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {courseData.totalLessons || '0'} লেসন
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      ৳{courseData.price || '0'}
                    </div>
                    {courseData.originalPrice && (
                      <div className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'} line-through`}>
                        ৳{courseData.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-8`}>
      <SEOHelmet
        title="নতুন কোর্স তৈরি করুন"
        description="নতুন অনলাইন কোর্স তৈরি করুন এবং আপনার জ্ঞান শেয়ার করুন। সহজ ধাপে ধাপে কোর্স তৈরির প্রক্রিয়া।"
        keywords="কোর্স তৈরি, অনলাইন কোর্স, প্রশিক্ষক, শিক্ষা, কোর্স আপলোড"
        url="/create-course"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate('/instructor/courses')}
              className={`flex items-center ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              কোর্স তালিকায় ফিরে যান
            </button>
          </div>
          
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            নতুন কোর্স তৈরি করুন
          </h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            আপনার জ্ঞান শেয়ার করুন এবং শিক্ষার্থীদের সাহায্য করুন
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-6 mb-8`}
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id 
                    ? 'bg-primary-600 text-white' 
                    : darkMode 
                      ? 'bg-gray-700 text-gray-400' 
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id 
                      ? darkMode ? 'text-white' : 'text-gray-900'
                      : darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.id 
                      ? 'bg-primary-600' 
                      : darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border p-8 mb-8`}
        >
          {renderStepContent()}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between"
        >
          <div>
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className={`flex items-center px-6 py-3 border rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors duration-200`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                পূর্ববর্তী
              </button>
            )}
          </div>

          <div className="flex space-x-4">
            {currentStep === 4 ? (
              <>
                <button
                  onClick={() => handleSubmit('draft')}
                  disabled={loading}
                  className={`flex items-center px-6 py-3 border rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} transition-colors duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Save className="h-4 w-4 mr-2" />
                  খসড়া সংরক্ষণ
                </button>
                <button
                  onClick={() => handleSubmit('published')}
                  disabled={loading}
                  className={`flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      প্রকাশ হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      প্রকাশ করুন
                    </>
                  )}
                </button>
              </>
            ) : (
              <button
                onClick={nextStep}
                className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                পরবর্তী
                <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateCoursePage;