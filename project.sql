/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:40:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `imgs` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `yuanjia` decimal(10,0) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '机师夹克  中棉 C9 男款  军绿色', '../img/miaos4.png', '1', '389', '188');
INSERT INTO `goods` VALUES ('2', '夹克 字母刺绣 工装袋 黑色', '../img/good1.png', '1', '498', '198');
INSERT INTO `goods` VALUES ('3', '凡客卫衣 暖绒开衫C1 男款 浅花灰', '../img/good2.png', '1', '588', '218');
INSERT INTO `goods` VALUES ('4', '凡客卫衣 暖绒开衫C2 男款 花灰', '../img/miaos1.png', '1', '399', '159');
INSERT INTO `goods` VALUES ('5', '凡客卫衣 暖绒开衫 男款 深花灰', '../img/miaos2.png', '1', '489', '199');
INSERT INTO `goods` VALUES ('6', '凡客卫衣 暖绒开衫 男款 黑色', '../img/miaos3.png', '1', '599', '288');
INSERT INTO `goods` VALUES ('7', '凡客夹克 暖绒开衫 男款 浅花', '../img/miaos5.png', '1', '528', '169');
INSERT INTO `goods` VALUES ('8', '凡客卫衣 暖绒开衫 男款 浅灰', '../img/jiake.png', '1', '488', '119');
INSERT INTO `goods` VALUES ('9', '凡客卫衣 暖绒开衫 男款 C9', '../img/jiake2.png', '1', '299', '258');
INSERT INTO `goods` VALUES ('10', '凡客卫衣 暖绒开衫 男款 浅花灰', '../img/good2.png', '1', '369', '339');
INSERT INTO `goods` VALUES ('11', '凡客卫衣 暖绒开衫 男款 C8', '../img/good1.png', '1', '339', '219');
INSERT INTO `goods` VALUES ('12', '凡客卫衣 暖绒开衫 男款 C7', '../img/good2.png', '1', '236', '309');
INSERT INTO `goods` VALUES ('13', '凡客卫衣 暖绒开衫 男款 C6', '../img/miaos1.png', '1', '689', '328');
INSERT INTO `goods` VALUES ('14', '凡客卫衣 暖绒开衫 男款 C5', '../img/miaos2.png', '1', '689', '338');
INSERT INTO `goods` VALUES ('15', '凡客卫衣 暖绒开衫 男款 C4', '../img/miaos3.png', '1', '589', '348');
INSERT INTO `goods` VALUES ('16', '凡客卫衣 暖绒开衫 男款 C3', '../img/miaos4.png', '1', '689', '358');
INSERT INTO `goods` VALUES ('17', '凡客卫衣 暖绒开衫 男款 C2', '../img/miaos5.png', '1', '689', '359');
INSERT INTO `goods` VALUES ('18', '凡客卫衣 暖绒开衫 男款 C1', '../img/good1.png', '1', '689', '360');
INSERT INTO `goods` VALUES ('19', '凡客卫衣 暖绒开衫 男款 C0', '../img/good2.png', '1', '688', '366');
INSERT INTO `goods` VALUES ('20', '凡客卫衣 暖绒开衫 男款 C#', '../img/jiake.png', '1', '666', '370');
INSERT INTO `goods` VALUES ('21', '凡客卫衣 暖绒开衫 男款 浅灰', '../img/jiake2.png', '1', '668', '378');
INSERT INTO `goods` VALUES ('22', '凡客卫衣 暖绒开衫 男款 深灰', '../img/good1.png', '1', '689', '388');
INSERT INTO `goods` VALUES ('23', '凡客卫衣 暖绒开衫 男款 浅黑', '../img/good2.png', '1', '699', '399');
INSERT INTO `goods` VALUES ('24', '凡客卫衣 暖绒开衫 男款 淡蓝', '../img/miaos1.png', '1', '333', '229');
INSERT INTO `goods` VALUES ('25', '凡客卫衣 暖绒开衫 男款 深蓝', '../img/miaos2.png', '1', '699', '419');
INSERT INTO `goods` VALUES ('26', '凡客卫衣 暖绒开衫 男款 牛仔', '../img/miaos3.png', '1', '589', '318');
INSERT INTO `goods` VALUES ('27', '凡客卫衣 暖绒开衫 男款 军绿', '../img/miaos4.png', '1', '555', '499');
INSERT INTO `goods` VALUES ('28', '凡客卫衣 暖绒开衫 男款 拉链', '../img/miaos5.png', '1', '577', '428');
INSERT INTO `goods` VALUES ('29', '凡客卫衣 暖绒开衫 男款 熊本熊', '../img/good1.png', '1', '566', '438');
INSERT INTO `goods` VALUES ('30', '凡客卫衣 暖绒开衫 男款 连帽', '../img/good2.png', '1', '588', '448');

-- ----------------------------
-- Table structure for indx
-- ----------------------------
DROP TABLE IF EXISTS `indx`;
CREATE TABLE `indx` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `description` varchar(255) NOT NULL,
  `imgs` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of indx
-- ----------------------------
INSERT INTO `indx` VALUES ('1', '01', '119.00', '1', '棉绒开衫', 'img/good1.png');
INSERT INTO `indx` VALUES ('2', '02', '109.00', '1', '廓形连帽', 'img/good2.png');
INSERT INTO `indx` VALUES ('3', '03', '159.00', '1', 'C90熊本熊', 'img/miaos1.png');
INSERT INTO `indx` VALUES ('4', '04', '129.00', '1', '基础拉链开衫', 'img/miaos2.png');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'lemon', '111111', '15888888888');
INSERT INTO `user` VALUES ('2', 'laoxie', '222222', '18999999999');
INSERT INTO `user` VALUES ('9', 'aaaaaa', '111111', null);
INSERT INTO `user` VALUES ('10', 'daizhiyuan', '123456789', null);
INSERT INTO `user` VALUES ('11', 'dddddd', '555555', '13222222222');
INSERT INTO `user` VALUES ('12', 'eeeeee', '111111', '13222222222');
SET FOREIGN_KEY_CHECKS=1;
